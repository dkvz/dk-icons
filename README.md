# DK Icon Lib
DO NOT USE

These are just internal notes, I take notes a lot.

The icons can be minified for production like so:
```
npm install
npm start
```
Will populate the "dist" folder.

## Minification
I'm going to use imagemin and Node.js to minify in the "dist" folder (excluded from git).

Installing it:
```
npm install imagemin imagemin-svgo
```

Docs for SVGO options are here: https://github.com/svg/svgo#what-it-can-do

I thought the kettlebell was getting mangled but the issue was my file explorer on Linux (Nemo) having an apparent render bug for SVGs.

## Icon format

- 512x512 - tilt any rectangular shape to make it fit diagonally.
- Set stroke to 10px.
- Round all the stroke ends and corners

In Inkscape:
- Document settings, set dimensions, set Display Units **AND** Untis to px (yes there are two of these)
- Set the viewBox to 512x512 too
- Create guides in the middle of the documents; It's very important to start there
- WHEN A PATH IS FINISHED FILL IT IMMEDIATELY

## Colors
Background: #ffcc00

# TODO
- [ ] Open all the old images and set the global "Display Units" to px, it's still mm in document properties.
