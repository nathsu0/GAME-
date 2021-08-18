
<link rel="stylesheet" href="../css/common.css">
<nav class="top navbar navbar-expand-lg navbar-light bg-light bg-transparent text-dark">
  <div class="container-fluid my-1">
    <label class="navbar-brand"></label>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item me-3">
          <?php echo $user; ?>
          <img src="../img/person-fill.svg">
        </li>
        <li class="nav-item">
          <a href=<?= $_SESSION['teachlink']?>>Log Out
            <img src="../img/box-arrow-right.svg">
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
