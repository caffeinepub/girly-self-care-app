# Specification

## Summary
**Goal:** Update the “Hello Girlies App” React UI to match the provided HTML flow, copy, and add persistent background ambient music with user controls.

**Planned changes:**
- Implement multi-page in-app navigation with these views: Opening screen → Menu → dedicated screens for To-Do List, Self-Care Reminders, Notes, and Relax Mode; each feature screen includes a clear “Back” action to the Menu.
- Align user-facing copy (headings, button labels, placeholders, and short helper text) to closely match the provided HTML wording while keeping all text in English.
- Add looping background music using the exact provided audio URL, with a visible play/pause control (optionally mute/unmute), handling autoplay restrictions gracefully and persisting the user’s preference via local storage.

**User-visible outcome:** Users land on an Opening screen with a “Next” button, navigate to a Menu to open each feature screen and return back, see copy consistent with the provided HTML, and can control ambient background music that remembers their preference across reloads.
