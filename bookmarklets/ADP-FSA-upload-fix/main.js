window['com.michaelbarany.bookmarklet'].execute({
}, function ($) {
    /**
     * Callback triggers after all the scripts and templates are loaded
     * First dependency is jQuery followed by JS and then Raw Templates
     */
    $('input[type=file]').attr('accept', '');
});
