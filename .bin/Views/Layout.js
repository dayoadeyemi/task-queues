"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppShell = (params) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark navbar-fixed-top">
            <a href="/home"><h1 class="navbar-brand mb-0">TasQ</h1></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul style="padding-bottom:0px;padding-top:0px;" class="navbar-nav mr-auto mt-2 mt-lg-0">
                ${params.navLinks ? params.navLinks.map(({ path, text, active }) => `
                    <li style="padding-bottom:0px;padding-top:0px;" class="nav-item ${active ? 'active' : ''}">
                        <a style="padding-bottom:0px;padding-top:0px;" class="nav-link" href="${path}">${text}</a>
                    </li>`).join('\n') : ''}
                </ul>
                <span class="navbar-text" style="padding-bottom:0px;padding-top:0px;">
                    ${params.navContent || ''}
                </span>
            </div>
        </nav>
        ${params.body}
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    </body>
</html>
`;
exports.default = AppShell;
//# sourceMappingURL=Layout.js.map