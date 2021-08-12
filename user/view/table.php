<?php
include 'database.php';
include 'teacher/conn.php';
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Admin</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---Sign in CSS -->
    <link rel="stylesheet" href="../css/table.css">
</head>
  <body>
    <!----MAIN CONTAINER-->
    <div class="Main container ">
        <!-----CONTENT IN CONTAINER-->
          <div class="Box containermt-5 p-0">
           <!---NAVIGATION BAR START-->
           <nav class="top navbar navbar-expand-lg navbar-light bg-light bg-transparent text-dark">
            <div class="container-fluid my-1">
              <label class="navbar-brand"></label>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                 
                  <li class="nav-item">
                      
                      </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
   <!----NAVIGATION BAR END-->
            <!----CONTENT START------->
            <div class="blocks container ">
            <h2>Teacher Account</h2>
            <form method = 'post' action = ''>
            <div class="table-responsive">
              <label>Click Username.</label>
                <table class="table ">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                      </tr>
                    </thead>
                    <tbody class="hoverTable">
                    <?php
            $result = mysqli_query($conn,"SELECT * from user ORDER BY 'ID' ");
            while($row=mysqli_fetch_assoc($result)){
              ?>
              <tr><a href = "ACreated.php" class="row-link">
                  <td name="id"> <a href="teacher/AMain_menu.php?teach=<?php echo $row["username"];?>&id=<?= $row["ID"]?>" class="row-link"><div style="height:100%;width:100%"><?php  echo $row["ID"];?></a></td></div>
                  <td name="username"> <a href="../../teacher/view/Log_in.php?teach=<?php echo $row["username"];?>&id=<?= $row["ID"]?>"  class="row-link"><div style="height:100%;width:100%"><?php  echo $row["username"];?> </a></td></div>
            </a>
              </tr>
              
              <?php 
            }?>
                   
                    </tbody>
                  </table>
            </div>
            <div class="container ">
            <div class="row">
                <div class="col-lg d-flex justify-content-center">
            <a href="option.html" type="button" class="button">
                Back
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </a>
          </div>
          <div class="col-lg d-flex justify-content-center">
              <a href="../../teacher/view/register.php" type="button" class="button">
                Add Account
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </a>
          </div>
              <div class="col-lg d-flex justify-content-center">
             <!-- Button trigger modal -->
                  <button type="button" class="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Instruction
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </button>
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel"style = "color:black">Instruction</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body"style = "color:black">
                        Hey there! With Bubble Popper, you can create your own questions, view the student's scores and duplicate the game that can be accessed by students. Click on the username to access these features. 
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
          </div> 
          </div>
        </div>
            </div>
         </form>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <!--Sign in JS-->
    <script src="../js/option.js"></script>
</body>
</html>