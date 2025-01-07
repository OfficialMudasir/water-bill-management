export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Water-Bill-Management</title>
  <base href="/water-bill-management/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="/public//assets/Water-Bill-Management.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css"> -->

<link rel="stylesheet" href="styles-5INURTSO.css"><style ng-app-id="ng">.toast-container[_ngcontent-ng-c3841843965]{position:fixed;top:10px;right:10px;z-index:1050}.toast[_ngcontent-ng-c3841843965]{display:flex;align-items:center;gap:10px;padding:10px 20px;margin-bottom:10px;border-radius:5px;box-shadow:0 4px 6px #0000001a;color:#fff}.toast-success[_ngcontent-ng-c3841843965]{background-color:#198754}.toast-error[_ngcontent-ng-c3841843965]{background-color:#db3646}svg[_ngcontent-ng-c3841843965]{width:30px;height:30px}</style><style ng-app-id="ng">.card[_ngcontent-ng-c180576477]{width:100%}.modal-backdrop[_ngcontent-ng-c180576477]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#00000080;z-index:1040}.password-control[_ngcontent-ng-c180576477]{border-top-right-radius:6px!important;border-bottom-right-radius:6px!important}</style></head>

<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["submit","change","input","compositionstart","compositionend","click"],["blur"]);</script>
  <app-root ng-version="19.0.5" ngh="2" ng-server-context="ssg"><app-toast _nghost-ng-c3841843965 ngh="0"><!----></app-toast><router-outlet></router-outlet><app-login _nghost-ng-c180576477 ngh="1"><div _ngcontent-ng-c180576477 class="container-fluid vh-100 bg-light d-flex align-items-center justify-content-center"><div _ngcontent-ng-c180576477 class="card shadow-sm" style="max-width: 400px;"><div _ngcontent-ng-c180576477 class="card-body p-4"><h2 _ngcontent-ng-c180576477 class="text-center mb-2">Welcome Back</h2><p _ngcontent-ng-c180576477 class="text-center text-muted mb-4">Login to access your account</p><form _ngcontent-ng-c180576477 novalidate class="ng-untouched ng-pristine ng-valid" jsaction="submit:;"><div _ngcontent-ng-c180576477 class="mb-3"><label _ngcontent-ng-c180576477 class="form-label">Login As</label><select _ngcontent-ng-c180576477 name="userType" class="form-select ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"><option _ngcontent-ng-c180576477 value="Admin" selected="true">Admin</option><option _ngcontent-ng-c180576477 value="Junior">Junior Engineer</option><option _ngcontent-ng-c180576477 value="Assistant">Assistant Engineer</option><option _ngcontent-ng-c180576477 value="Executive">Executive Engineer</option><option _ngcontent-ng-c180576477 value="Operator">Operator</option><option _ngcontent-ng-c180576477 value="Consumer">Consumer</option></select></div><!----><div _ngcontent-ng-c180576477 class="mb-3"><label _ngcontent-ng-c180576477 for="username" class="form-label">Username</label><input _ngcontent-ng-c180576477 type="text" id="username" name="username" required class="form-control ng-untouched ng-pristine ng-valid" value="admin" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c180576477 class="mb-3"><label _ngcontent-ng-c180576477 for="password" class="form-label">Password</label><div _ngcontent-ng-c180576477 class="input-group"><input _ngcontent-ng-c180576477 id="password" name="password" required class="form-control password-control ng-untouched ng-pristine ng-valid" type="password" value="admin" jsaction="input:;blur:;compositionstart:;compositionend:;"><button _ngcontent-ng-c180576477 type="button" class="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y border-0" jsaction="click:;"><i _ngcontent-ng-c180576477 class="bi bi-eye-fill"></i></button></div></div><div _ngcontent-ng-c180576477 class="d-flex justify-content-between align-items-center mb-4"><div _ngcontent-ng-c180576477 class="form-check"><input _ngcontent-ng-c180576477 type="checkbox" id="remember" name="remember" class="form-check-input ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"><label _ngcontent-ng-c180576477 for="remember" class="form-check-label">Remember me</label></div><a _ngcontent-ng-c180576477 href="#" class="text-decoration-none text-muted">Forgot password?</a></div><button _ngcontent-ng-c180576477 type="submit" class="btn btn-dark w-100 mb-3">Login</button><div _ngcontent-ng-c180576477 class="text-center"><span _ngcontent-ng-c180576477 class="text-muted">First time user? </span><a _ngcontent-ng-c180576477 href="#" class="text-decoration-none text-dark">Register here</a></div></form></div></div></div><div _ngcontent-ng-c180576477 id="divisionModal" tabindex="-1" aria-labelledby="divisionModalLabel" aria-hidden="true" class="modal fade" style="display: none;"><div _ngcontent-ng-c180576477 class="modal-dialog modal-content-custom"><div _ngcontent-ng-c180576477 class="modal-content"><div _ngcontent-ng-c180576477 class="modal-header"><h5 _ngcontent-ng-c180576477 id="divisionModalLabel" class="modal-title">Select Division</h5><button _ngcontent-ng-c180576477 type="button" data-bs-dismiss="modal" aria-label="Close" class="btn-close" jsaction="click:;"></button></div><div _ngcontent-ng-c180576477 class="modal-body"><label _ngcontent-ng-c180576477 for="division" class="form-label">Division</label><select _ngcontent-ng-c180576477 id="division" class="form-select"><option _ngcontent-ng-c180576477 value="Division1">Division 1</option><option _ngcontent-ng-c180576477 value="Division2">Division 2</option><option _ngcontent-ng-c180576477 value="Division3">Division 3</option></select></div><div _ngcontent-ng-c180576477 class="modal-footer"><button _ngcontent-ng-c180576477 type="button" data-bs-dismiss="modal" class="btn btn-secondary" jsaction="click:;">Close</button><button _ngcontent-ng-c180576477 type="button" class="btn btn-primary">Done</button></div></div></div></div></app-login><!----></app-root>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>


<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-HAJWWQTW.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"0":"t0"},"c":{"0":[]}},{"t":{"24":"t1"},"c":{"24":[]}},{"c":{"1":[{"i":"c180576477","r":1}]}}]}</script></body></html>`;