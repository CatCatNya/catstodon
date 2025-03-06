# Catstodon

## Introduction

This Mastodon fork is based on the [glitch-soc Fork of Mastodon](https://github.com/glitch-soc/mastodon), historically
with changes made to suit [CatCatNya~](https://catcatnya.com).
Some changes may be contributed back to [glitch-soc](https://github.com/glitch-soc/mastodon).

To install, take a look at [glitch-soc.github.io/docs/](https://glitch-soc.github.io/docs/). The instructions and
features are the same, except for the differences outlined below.

Contributing guidelines are available [here](CONTRIBUTING.md).

Note: **Use the `main` branch only for forks.** The `develop` and `stable-develop/*` branches are experimental, have no
stable state, and are only used for testing changes e.g. [the staging instance](https://cts.kescher.at) or temporary
test instances.
For production, it is suggested you run:

- any of the `stable/*` branches or stable tags
  - do note, however, that these branches/tags have a similar support cycle to upstream, and therefore also to vanilla
    Mastodon!
  - New Catstodon-exclusive features will only be introduced to the main branch. The `stable` branches will _not_ get
    backports of new features.
- the `main` branch, which is comparable to "nightly" versions in vanilla Mastodon.

## Differences

- Some files are adjusted specifically for the CatCatNya~ instance, and you may want revert/change them. Specifically,
  these:
  - sounds/boop.mp3
  - sounds/boop.ogg
- The rate limits for authenticated users have been relaxed a bit. Vanilla Mastodon, and by extension glitch-soc, sadly
  has rate-limits that make it possible to run into these rate-limits during normal usage.
- The API endpoint `/api/v1/custom_emojis` is no longer affected by AUTHORIZED_FETCH, allowing anyone to copy custom
  emojis.
- Allow higher resolution images. (4096x4096 instead of the previous limit of 3840x2160)
- Allow posting polls with only one poll option (if `MIN_POLL_OPTIONS` is set to 1 on your instance).
- Emoji reactions on statuses (with both Unicode and custom emojis, same as for announcements), a feature originally
  developed for [Nyastodon](https://git.bsd.gay/fef/nyastodon).
  Ended up as a Catstodon-maintained patch after its initial two Pull Requests to glitch-soc, but was handed over
  to [Essem's fork, Chuckya](https://github.com/TheEssem/mastodon) and is now
  pending [its fourth attempt of merging into glitch-soc](https://github.com/glitch-soc/mastodon/pull/2462).
- Lifts the "only federate local favourites" restriction on favourites/likes and emoji reactions.
- Cherry-picks the
  [activity filter branch](https://github.com/chikorita157/mastodon-sakura/tree/newmain-tmp3-noellabo-filtering)
  from [Sakurajima Mastodon](https://github.com/chikorita157/mastodon-sakura).
- Adds the ability to disable the suspicious sign in detection entirely.
  - Useful for situations where the instance may not have up-to-date IP information, such as when the period of IP
    address retention is set to a low value (see _Previous differences now merged into vanilla Mastodon_)
- Environment variable `MASTODON_USE_LIBVIPS` is true by default.
  - This is a minor change, but it _requires_ all systems running Catstodon to run a recent libvips version (8.13+),
    except if this variable is explicitly set to false.
  - Vanilla Mastodon intends to deprecate ImageMagick anyway, so sooner or later, this change will cease being one.
- Allow dashes in emoji shortcodes
  - This is simply to allow custom emoji compat with other fedi software.
  - Original patch by hazycora: https://github.com/TheEssem/mastodon/commit/2dde7a25a47a23f827e2fd2d07f55438f9985181
- In the compose form, the character counter is now always below the text field.

## Contributions to glitch-soc Mastodon

- Fixed incorrect upload size limit display when adding new a new custom
  emoji. ([Pull request](https://github.com/glitch-soc/mastodon/pull/1763))
- Standalone share page: Dispatch fetchServer for maxChars. Fixes the bug where the standalone share page did not
  display the correct maximum character amount. ([Pull request](https://github.com/glitch-soc/mastodon/pull/2929))
- \[Glitch\] Fix `/share` not using server-set characters limit ([Pull request](https://github.com/glitch-soc/mastodon/pull/2929))
- Everything merged into vanilla Mastodon

## Contributions to Vanilla Mastodon

- The period of retention of IP addresses and sessions was made
  configurable. ([Pull request](https://github.com/mastodon/mastodon/pull/18757))
- Fix `/share` not using server-set characters limit ([Pull request](https://github.com/mastodon/mastodon/pull/33459))
- Security: Domain blocks & rationales ignore user approval when visibility set as "users"
  - [GitHub Security Advisory](https://github.com/mastodon/mastodon/security/advisories/GHSA-94h4-fj37-c825)
  - [CVE-2025-27399](https://www.cve.org/CVERecord?id=CVE-2025-27399)
  - [Commit (with improvements by ClearlyClaire)](https://github.com/mastodon/mastodon/commit/6b519cfefa93a923b19d0f20c292c7185f8fd5f5))
