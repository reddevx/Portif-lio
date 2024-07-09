
document.getElementById('copyEmailButton').addEventListener('click', function() {
  const email = 'seu.email@exemplo.com';
  const el = document.createElement('textarea');
  el.value = email;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  alert('Email copiado: ' + email);
});
