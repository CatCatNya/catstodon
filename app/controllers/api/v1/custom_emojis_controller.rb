# frozen_string_literal: true

class Api::V1::CustomEmojisController < Api::BaseController
  vary_by '', unless: :disallow_unauthenticated_api_access?
  skip_before_action :require_authenticated_user!, unless: :limited_federation_mode?

  def index
    cache_even_if_authenticated! unless disallow_unauthenticated_api_access?
    render_with_cache(each_serializer: REST::CustomEmojiSerializer) { CustomEmoji.listed.includes(:category) }
  end
end
