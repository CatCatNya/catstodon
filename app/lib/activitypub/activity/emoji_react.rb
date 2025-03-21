# frozen_string_literal: true

class ActivityPub::Activity::EmojiReact < ActivityPub::Activity
  CUSTOM_EMOJI_REGEX = /^:[^:]+:$/

  def perform
    original_status = status_from_uri(object_uri)
    name = @json['content']
    return if original_status.nil? || delete_arrived_first?(@json['id'])

    if CUSTOM_EMOJI_REGEX.match?(name)
      name.delete! ':'
      custom_emoji = process_emoji_tags(name, @json['tag'])

      return if custom_emoji.nil?
    end

    return if !original_status.account.local? || @account.reacted?(original_status, name, custom_emoji)

    reaction = original_status.status_reactions.create!(account: @account, name: name, custom_emoji: custom_emoji)

    LocalNotificationWorker.perform_async(original_status.account_id, reaction.id, 'StatusReaction', 'reaction') if original_status.account.local?
  rescue ActiveRecord::RecordInvalid
    nil
  end
end
