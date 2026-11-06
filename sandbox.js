<script>
  /* title case opening titles, but skip "development-intro__title" */
  document.querySelectorAll('[class*="-intro__title"]').forEach(el => {
    if (el.classList.contains('development-intro__title')) return; // Skip this one

    let text = el.textContent.trim();
    text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    // Ensure it ends with a period
    if (!text.endsWith('.')) {
        text += '.';
    }

    el.textContent = text;
  });

        // Define the custom languages for Google Translate
        window.customLanguages = 'en,es,zh-CN,zh-TW,tl,vi,ar,ko,ru,de,fr,hi,pt,it';
</script>
