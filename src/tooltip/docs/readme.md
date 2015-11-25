A lightweight, extensible directive for fancy tooltip creation. The tooltip
directive supports multiple placements, optional transition animation, and more.

There are three versions of the tooltip: `uib-tooltip`, `uib-tooltip-template`, and
`uib-tooltip-html-unsafe`:

- `uib-tooltip` takes text only and will escape any HTML provided.
- `uib-tooltip-template` takes text that specifies the location of a template to
  use for the tooltip. Note that this needs to be wrapped in a tag.
- `uib-tooltip-html` takes
  whatever HTML is provided and displays it in a tooltip; *The user is responsible for ensuring the
  content is safe to put into the DOM!*

The tooltip directives provide several optional attributes to control how they
will display:

- `tooltip-placement`: Where to place it? Defaults to "top". Passing in 'auto' seperated by a space before the placement will
  enable auto positioning, e.g: "auto bottom-left". The tooltip will attempt to position where it fits in
  the closest scrollable ancestor. Accepts:

   - "top" - tooltip on top, horizontally centered on host element.
   - "top-left" - tooltip on top, left edge aligned with host element left edge.
   - "top-right" - tooltip on top, right edge aligned with host element right edge.
   - "bottom" - tooltip on bottom, horizontally centered on host element.
   - "bottom-left" - tooltip on bottom, left edge aligned with host element left edge.
   - "bottom-right" - tooltip on bottom, right edge aligned with host element right edge.
   - "left" - tooltip on left, vertically centered on host element.
   - "left-top" - tooltip on left, top edge aligned with host element top edge.
   - "left-bottom" - tooltip on left, bottom edge aligned with host element bottom edge.
   - "right" - tooltip on right, vertically centered on host element.
   - "right-top" - tooltip on right, top edge aligned with host element top edge.
   - "right-bottom" - tooltip on right, bottom edge aligned with host element bottom edge.
- `tooltip-animation`: Should it fade in and out? Defaults to "true".
- `tooltip-popup-delay`: For how long should the user have to have the mouse
  over the element before the tooltip shows (in milliseconds)? Defaults to 0.
- `tooltip-close-popup-delay`: For how long should the tooltip remain open
  after the close trigger event? Defaults to 0.
- `tooltip-trigger`: What should trigger a show of the tooltip? Supports a space separated list of event names.
  Note: this attribute is no longer observable. See `tooltip-enable`.
- `tooltip-enable`: Is it enabled? It will enable or disable the configured
  `tooltip-trigger`.
- `tooltip-append-to-body`_(Default: false)_: Should the tooltip be appended to `$body` instead of
  the parent element?  Note that the presence of this attribute without a value implies `true`.
- `tooltip-class`: Custom class to be applied to the tooltip.
- `tooltip-is-open` <i class="fa fa-eye-open"></i>
  _(Default: false)_:
  Whether to show the tooltip.

The tooltip directives require the `$position` service.

**Triggers**

The following show triggers are supported out of the box, along with their
provided hide triggers:

- `mouseenter`: `mouseleave`
- `click`: `click`
- `outsideClick`: `outsideClick`
- `focus`: `blur`
- `none`: ``

The `outsideClick` trigger will cause the tooltip to toggle on click, and hide when anything else is clicked.

For any non-supported value, the trigger will be used to both show and hide the
tooltip. Using the 'none' trigger will disable the internal trigger(s), one can
then use the `tooltip-is-open` attribute exclusively to show and hide the tooltip.

**$uibTooltipProvider**

Through the `$uibTooltipProvider`, you can change the way tooltips and popovers
behave by default; the attributes above always take precedence. The following
methods are available:

- `setTriggers(obj)`: Extends the default trigger mappings mentioned above
  with mappings of your own. E.g. `{ 'openTrigger': 'closeTrigger' }`.
- `options(obj)`: Provide a set of defaults for certain tooltip and popover
  attributes. Currently supports 'placement', 'placementClassPrefix', 'animation', 'popupDelay', and
  `appendToBody`. Here are the defaults:

  <pre>
  placement: 'top',
  placementClassPrefix: '',
  animation: true,
  popupDelay: 0,
  popupCloseDelay: 500,
  appendToBody: false
  </pre>

**Known issues**

For Safari 7+ support, if you want to use the **focus** `tooltip-trigger`, you need to use an anchor tag with a tab index. For example:

```
<a tabindex="0" uib-tooltip="Test" tooltip-trigger="focus" class="btn btn-default">
  Click Me
</a>
```
