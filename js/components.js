// ===== Shared component renderer =====
(function() {
    const C = window.COURSE || {};

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function renderThemePicker() {
        const container = document.getElementById('theme-picker');
        if (!container) return;
        container.innerHTML = `
            <div class="theme-trigger">THEME</div>
            <div class="theme-dots">
                <div class="theme-dot active" data-theme="light" data-label="Light"></div>
                <div class="theme-dot" data-theme="dark" data-label="Dark"></div>
            </div>
        `;
    }

    function renderCompactHeader() {
        const container = document.getElementById('compact-header');
        if (!container) return;
        container.innerHTML = `
            <header class="course-header compact">
                <div class="header-inner">
                    <div class="course-meta">
                        <span class="course-code">${escapeHtml(C.code)}</span>
                        <span class="course-semester">${escapeHtml(C.semester)}</span>
                    </div>
                    <h1 class="course-title">${escapeHtml(C.title)}</h1>
                </div>
            </header>
        `;
    }

    function renderNavbar(activeKey) {
        const container = document.getElementById('navbar');
        if (!container) return;
        const items = (C.navPages || [])
            .map(p => {
                const activeClass = p.key === activeKey ? 'active' : '';
                return `<li><a href="${escapeHtml(p.href)}" class="nav-link ${activeClass}">${escapeHtml(p.label)}</a></li>`;
            })
            .join('\n');
        container.innerHTML = `
            <ul class="nav-links">
                ${items}
            </ul>
        `;
    }

    function renderFooter() {
        const container = document.getElementById('footer');
        if (!container) return;
        container.innerHTML = `
            <p>${escapeHtml(C.code)} — ${escapeHtml(C.title)} · ${escapeHtml(C.semester)}</p>
            <p class="footer-sub">${escapeHtml(C.institution)} · ${escapeHtml(C.address)}</p>
        `;
    }

    // Render all shared chrome for a subpage.
    window.renderPage = function(activeKey) {
        renderThemePicker();
        renderCompactHeader();
        renderNavbar(activeKey);
        renderFooter();
    };

    // Render chrome for the homepage (no compact header).
    window.renderHomePage = function() {
        renderThemePicker();
        renderNavbar('home');
        renderFooter();
    };
})();
