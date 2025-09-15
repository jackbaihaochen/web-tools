document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // Infer relative prefix for links from nested tool pages
    const prefix = location.pathname.includes('/tools/') ? '../../' : './';

    // Inject shared header
    const header = document.getElementById('site-header');
    if (header) {
        header.classList.add('site-nav');
        header.innerHTML = `
            <div class="wrap site-nav-inner">
                <a class="brand" href="${prefix}">在线工具箱</a>
                <nav class="nav-links">
                    <a href="${prefix}">首页</a>
                    <a href="${prefix}faq.html">FAQ</a>
                    <a href="${prefix}privacy.html">隐私</a>
                </nav>
            </div>
        `;
    }

    // Inject shared footer
    const footer = document.getElementById('site-footer');
    if (footer) {
        footer.classList.add('site-footer');
        footer.innerHTML = `
            <div class="wrap muted">
                <p>© <span id="year">${new Date().getFullYear()}</span> 在线工具箱 · 
                   <a href="${prefix}">首页</a> · 
                   <a href="${prefix}faq.html">FAQ</a> · 
                   <a href="${prefix}privacy.html">隐私</a></p>
            </div>
        `;
    }
});
