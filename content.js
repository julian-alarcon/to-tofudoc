(function () {
  const redirections = {
    "https://developer.hashicorp.com/terraform/intro": "https://opentofu.org/docs/intro",
    "https://developer.hashicorp.com/terraform/cli": "https://opentofu.org/docs/cli",
    "https://developer.hashicorp.com/terraform/language": "https://opentofu.org/docs/language",
    "https://developer.hashicorp.com/terraform/internals": "https://opentofu.org/docs/internals",
  };

  // Check for matching patterns and redirect
  const currentUrl = window.location.href;
  const baseUrl = Object.keys(redirections).find(baseUrl => currentUrl.startsWith(baseUrl));

  if (baseUrl) {
    const relativePath = currentUrl.replace(baseUrl, "");
    const opentofuUrl = redirections[baseUrl] + relativePath;
    console.log("OpenTofu Docs Redirector - Redirecting:", currentUrl);
    if (confirm(`OpenTofu Docs Redirector - Redirect to OpenTOFU docs: ${opentofuUrl}?`)) {
      console.log("OpenTofu Docs Redirector - Redirecting to:", opentofuUrl);
      window.location.replace(opentofuUrl);
      console.log("OpenTofu Docs Redirector - Redirected succesfully to:", opentofuUrl);
    }
  } else {
    console.warn("No matching redirection rule found for:", currentUrl);
  }
})();
