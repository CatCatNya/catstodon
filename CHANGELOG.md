# Changelog

All changes to Catstodon that aren't Mastodon or glitch-soc Mastodon changes will be documented here.

All release dates, as well as most other dates, are intended to be read as "within the day, in UTC time."

## [v4.4.1+cat.1.0.0] - 2025-07-09

- Upstream changes

## [v4.4.0-rc.1+cat.1.0.0] - 2025-07-03

- Upstream changes
  - This includes a ruby version bump to 3.4.4. Please install Ruby 3.4.4 before installing this version.
  - If you are upgrading from 4.3.x,
    read [upstream release notes](https://github.com/glitch-soc/mastodon/releases/tag/v4.4.0-rc.1).

## [v4.3.9+cat+1.0.0] - 2025-07-03

- Upstream changes
- Bump preferred Ruby version to 3.3.8

## [v4.3.8+cat+1.0.1] - 2025-05-19

- Emoji reactions patch changes
  - Emoji reactions now federate properly to Iceshrimp instances.
  - Thanks Essem for adding the required namespaces to reaction ActivityPub objects!
  - Thanks Elizabeth for reporting this being broken to the Iceshrimp project originally!

## [v4.3.8+cat+1.0.0] - 2025-05-08

- Upstream changes (security-related, please review upstream release notes for v4.3.7 and v4.3.8)

## [v4.3.6+cat+1.0.0] - 2025-03-09

- Upstream changes
- Make high contrast theme light-text-color equal to dark-text-color

## [v4.3.4+cat+1.0.1] - 2025-03-06

- Loosen federation of likes and emoji reactions

## [v4.3.4+cat+1.0.0] - 2025-02-27

- Upstream changes
  - Includes security fixes! Upgrade ASAP.

## [v4.3.3+cat+1.0.2] - 2025-02-25

- Update emoji reactions patch

## [v4.3.3+cat+1.0.1] - 2025-02-25

- Bump Ruby version to 3.3.7

## [v4.3.3+cat+1.0.0] - 2025-01-16

- Upstream changes, including security changes. See https://github.com/glitch-soc/mastodon/releases/tag/v4.3.3.

## [v4.3.2+cat.1.0.1] - 2025-01-04

- The character counter is now always below the text field, not somewhere among the action buttons
- The standalone share page now has the correct amount of remaining characters. Previously, it would assume a maximum
  character count of 500.
- Emoji reaction patch changes (removal of old, obsolete migration)

## [v4.3.2+cat.1.0.0] - 2024-12-30

- Upstream changes, see [GitHub Release](https://github.com/glitch-soc/mastodon/releases/tag/v4.3.2)
  or [CHANGELOG_glitch.md](CHANGELOG_glitch.md)
- Cherry-picked emoji reactions patch changes

## [v4.3.1+cat.1.0.2] - 2024-11-17

- Bump Ruby version to 3.3.6

## [v4.3.1+cat.1.0.1] - 2024-11-08

- Fix invisible reactions on detailed statuses when logged out (by Essem)

## [v4.3.1+cat.1.0.0] - 2024-11-01

- Upstream changes (see [upstream release](https://github.com/glitch-soc/mastodon/releases/tag/v4.3.1)).

## [v4.3.0+cat.1.0.2] - 2024-10-12

- Upstream changes

## [v4.3.0+cat.1.0.1] - 2024-10-10

- Upstream changes
- First stable Catstodon release, similar to [glitch-soc](https://github.com/glitch-soc/mastodon/releases/tag/v4.3.0).
- See upstream release notes.

## [v4.3.0-rc.1+cat.1.0.1] - 2024-10-04

- Fix inability to create ActivityPub messages

## [v4.3.0-rc.1+cat.1.0.0] - 2024-10-03

- Upstream changes
- A lot of emoji reaction patch changes along with upstream changes
  - Thanks, Essem!

## [v4.3.0-beta.2+cat.1.0.1] - 2024-09-20

- Fix clicking posts navigating to an invalid ("undefined") page
  - This has been entirely a Catstodon issue introduced in the merge of the prior version.

## [v4.3.0-beta.2+cat.1.0.0] - 2024-09-20

- Upstream changes
  - Bumps Ruby version to 3.3.5!
- Emoji reactions patch changes

## [4.3.0-beta.1+cat.1.0.0] - 2024-08-26

- Upstream (glitch-soc) changes
- Shorter versioning scheme (drops "glitch" in version)
  - It is obvious this code is still, and will for the foreseeable future, be based on glitch-soc.
- Release model changes
  - Glitch-soc is trying out releases. We will, similarly, do releases as well.
  - This means the main branch will now contain "nightly, but stable enough" states, similar to glitch-soc's main
    branch, but not every wave of commits to main will be accompanied by a new version.
  - Each glitch-soc release will be accompanied by a Catstodon release eventually.
  - Releases are now made whenever glitch-soc does one, or when important bugs are fixed either upstream or in
    Catstodon.

## [4.3.0-alpha.5+glitch+cat+1.0.10] - 2024-08-16

- Upstream changes. See [CHANGELOG_glitch.md](CHANGELOG_glitch.md), version 4.2.11.

## [4.3.0-alpha.5+glitch+cat+1.0.9] - 2024-08-16

- Upstream changes

## [4.3.0-alpha.5+glitch+cat+1.0.8] - 2024-08-11

- Upstream changes

## [4.3.0-alpha.5+glitch+cat+1.0.7] - 2024-08-05

- Emoji reaction patch changes
  - "Fix reblog reactions being hydrated improperly" by Essem

## [4.3.0-alpha.5+glitch+cat+1.0.6] - 2024-08-04

- Upstream changes

## [4.3.0-alpha.5+glitch+cat+1.0.5] - 2024-07-31

- Upstream changes

## [4.3.0-alpha.5+glitch+cat+1.0.4] - 2024-07-31

- Upstream changes

## [4.3.0-alpha.5+glitch+cat+1.0.3] - 2024-07-30

- Upstream changes
  - Fixes for intermittent errors in grouped notifications
- Emoji reaction patch changes
  - "Fix reactions bar alignment in ungrouped
    notifications" ([30899e050e](https://git.kescher.at/CatCatNya/catstodon/commit/30899e050e4de5952da14278e804ea23110f9204))
    by Essem
  - Other commit for i18n fixes was already applied in Catstodon.

## [v4.3.0-alpha.5+glitch+cat+1.0.2] - 2024-07-16

- Upstream changes
  - Notable: Notification grouping.
- Emoji patch changes
  - Notification grouping now works for reactions as well.
    - Thanks again, Essem, for maintaining the emoji reactions patch!
    - Catstodon
      commit: [fd8b04e9e7](https://git.kescher.at/CatCatNya/catstodon/commit/fd8b04e9e7c0e41b281012c49963ca9b5213ace7)
- Allow dashes in emoji shortcodes. Merged mainly to support remote instances' emoji shortcodes.
  - Thanks to hazycora for originally contributing this patch to Chuckya Mastodon.
  - Catstodon
    commit: [8ad361cb29](https://git.kescher.at/CatCatNya/catstodon/commit/8ad361cb29b46425e99bfc8edefcada0fe70a62f)

## [v4.3.0-alpha.5+glitch+cat+1.0.1] - 2024-07-16

- Upstream changes
  - You can hide hover cards now.

## [v4.3.0-alpha.5+glitch+cat+1.0.0] - 2024-07-04

- Upstream changes. Important for security! Upgrade now.
  - See version 4.2.10 in [CHANGELOG_glitch.md](CHANGELOG_glitch.md)
    or [The vanilla Mastodon 4.2.10 release page](https://github.com/mastodon/mastodon/releases/tag/v4.2.10).

## [v4.3.0-alpha.4+glitch+cat+1.1.3] - 2024-07-02

- Upstream changes

## [v4.3.0-alpha.4+glitch+cat+1.1.2] - 2024-06-22

- Upstream changes

## [v4.3.0-alpha.4+glitch+cat+1.1.1] - 2024-06-19

- Upstream changes (18d9601464524dabc4a451524a535d0f9a3cb65e -> 0c2b1f56ef6f0c48330076498741849b79d8b18c)
- Emoji reaction patch changes
  - "Turn custom emoji regexps into class level constants" by Essem

## [v4.3.0-alpha.4+glitch+cat+1.1.0] - 2024-06-17

- Set environment variable `MASTODON_USE_LIBVIPS` to true by default.
  - You need to install libvips for this.
  - If you don't want to, you'll _have to_ set this environment variable to `false`, for any commands you run.

## [v4.3.0-alpha.4+glitch+cat+1.0.3] - 2024-06-17

- Upstream changes
  - Ruby version is now 3.3.3, and must be installed before upgrading to this version.
- Emoji reaction PR changes
  - "Disable reactions in detailed status view when visibleReactions is 0" by Essem

## [v4.3.0-alpha.4+glitch+cat+1.0.2] - 2024-06-16

- Upstream changes
  - Ruby version is now 3.3.2, and must be installed before upgrading to this version.

## [v4.3.0-alpha.4+glitch+cat+1.0.1] - 2024-05-31

- Remove Oatstodon.
- Fix sign-in issues when the suspicious sign-in detector would trigger.

## [v4.3.0-alpha.4+glitch+cat+1.0.0] - 2024-05-29

- Upstream changes
  - Includes security fixes announced in vanilla version 4.2.9! See [CHANGELOG_glitch.md](CHANGELOG_glitch.md)
- Add ability to disable the suspicious sign-in detector
  - The CatCatNya~ production config has an IP retention period of one day. That will cause suspicious login emails to
    be sent out simply because we don't have any known IP data. Therefore, this fix is being applied.

## [v4.3.0-alpha.3+glitch+cat+1.2.6] - 2024-05-23

- Upstream changes

## [v4.3.0-alpha.3+glitch+cat+1.2.5] - 2024-05-21

- Apply a fix from the emoji reactions patch branch for an issue introduced in the 1.2.3 release for this Mastodon
  version.
  - Thanks, Essem!

## [v4.3.0-alpha.3+glitch+cat+1.2.4] - 2024-05-21

- Emergency release to fix production after ICU version 75 broke a dependency of Mastodon, `charlock_holmes`, in places
  that are not used in Mastodon.

## [v4.3.0-alpha.3+glitch+cat+1.2.3] - 2024-05-21

- Upstream changes, once again (including, but not limited to:)
  - Only uses a maximum of 1 megabyte of response body for link previews
  - Allow multiple `redirect_uri`s for OAuth 2.0 Applications
- Adjust emoji reactions patch to use modern React context for identity instead of an identity consumer

## [v4.3.0-alpha.3+glitch+cat+1.2.2] - 2024-05-17

- Upstream changes :3
  - Most notably, YJIT is now enabled by default (simply remove `config/initializers/enable_yjit.rb` if you want a lower
    memory footprint in exchange for worse performance)

## [v4.3.0-alpha.3+glitch+cat+1.2.1] - 2024-05-14

- Glitch-soc changes :3

## [v4.3.0-alpha.3+glitch+cat+1.2.0] - 2024-05-11

- Glitch-soc changes since and including 62bc36416f2d2defc77a501226afd0679b6ca252
- Ruby version 3.3.1. Update your rbenv!
- Mastodon/Catstodon now requires that these variables are set:

  - ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY
  - ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT
  - ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY

  After `bundle install`, run `bin/rails db:encryption:init` to generate values and then assign the environment
  variable, for example in your `.env.production`.

## [v4.3.0-alpha.3+glitch+cat+1.1.3] - 2024-04-26

- Glitch-soc changes, most notably fixing the display of follow request notifications.

## [v4.3.0-alpha.3+glitch+cat+1.1.2] - 2024-04-11

- Glitch-soc changes, most notably notifications about severed connections.
  - Wow, my Python code to do the same manually was finally rendered obsolete!

## [v4.3.0-alpha.3+glitch+cat+1.0.9] - 2024-03-03

- Glitch-soc changes again (this time, among other stuff, the search bar icon position is fixed)

## [v4.3.0-alpha.3+glitch+cat+1.0.8] - 2024-02-29

- Update translations from glitch-soc
- glitch-soc now uses openURL function from upstream

## [v4.3.0-alpha.3+glitch+cat+1.0.7] - 2024-02-28

- Merged glitch-soc changes (incl. comments on admin/instances page)

## [v4.3.0-alpha.3+glitch+cat+1.0.6] - 2024-02-25

- Applied changes to emoji reactions PR on glitch-soc
