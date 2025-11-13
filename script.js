// Tab switching
        (function(){
            const tabLogin = document.getElementById('tab-login');
            const tabRegister = document.getElementById('tab-register');
            const panelLogin = document.getElementById('panel-login');
            const panelRegister = document.getElementById('panel-register');

            function activateTab(tab) {
                if (tab === 'login') {
                    tabLogin.classList.add('active');
                    tabLogin.setAttribute('aria-selected', 'true');
                    tabRegister.classList.remove('active');
                    tabRegister.setAttribute('aria-selected', 'false');
                    panelLogin.hidden = false;
                    panelRegister.hidden = true;
                } else {
                    tabRegister.classList.add('active');
                    tabRegister.setAttribute('aria-selected', 'true');
                    tabLogin.classList.remove('active');
                    tabLogin.setAttribute('aria-selected', 'false');
                    panelRegister.hidden = false;
                    panelLogin.hidden = true;
                }
            }

            tabLogin.addEventListener('click', () => activateTab('login'));
            tabRegister.addEventListener('click', () => activateTab('register'));

            // Password show/hide
            document.querySelectorAll('.pw-toggle').forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = document.getElementById(btn.dataset.target);
                    if (!target) return;
                    if (target.type === 'password') {
                        target.type = 'text';
                        btn.textContent = 'Hide';
                        btn.setAttribute('aria-label', 'Hide password');
                    } else {
                        target.type = 'password';
                        btn.textContent = 'Show';
                        btn.setAttribute('aria-label', 'Show password');
                    }
                });
            });

            // Simple client-side validation
            document.getElementById('registerForm').addEventListener('submit', function(e){
                const pwd = document.getElementById('reg-password').value;
                const cpwd = document.getElementById('confirm-password').value;
                const msg = document.getElementById('register-message');
                msg.textContent = '';
                if (pwd !== cpwd) {
                    e.preventDefault();
                    msg.textContent = 'Passwords do not match.';
                }
            });

            document.getElementById('loginForm').addEventListener('submit', function(e){
                // Example: show feedback (real auth handled server-side)
                const msg = document.getElementById('login-message');
                msg.textContent = 'Submitting...';
                // Allow default submit for demo; in real app, handle via fetch/XHR
            });
        })();