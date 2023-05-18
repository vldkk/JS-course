let count = 0;
const checkboxes = $('input[type=checkbox]');
checkboxes.change(function () {
    this.checked ? count++ : count--;
    disabledCheckboxes();
});
function disabledCheckboxes() {
    if (count === 3) checkboxes.attr('disabled', true);
};
