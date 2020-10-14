(function () {
  const current_script = document.currentScript;
  const script_path = current_script.src;
  const script_dir = script_path.substr(0, script_path.lastIndexOf( '/' ) + 1);
  const frontend_base = script_dir + "../"

  config.development = {
    backend: "http:/192.168.122.144:3000",
    frontend: frontend_base,
  }
}());
