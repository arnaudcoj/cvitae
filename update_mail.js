window.onload = function() {
    document.querySelectorAll("a.mail").forEach(replace_at);
};

const replace_at = function (mail_a) {
    mail_a.href = mail_a.href.replace('[at]', '@');
    mail_a.textContent = mail_a.textContent.replace('[at]', '@');
};
