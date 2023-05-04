<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php include 'layout/head.phtml'; ?>
    </head>

    <body>

    <header>
            <?php include 'layout/header.phtml'; ?>
    </header>

    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!--Add list name h3-->
                    <h4>En cours</h4>
                    <div id="tasks-container">
                        
                    </div>
                    <div class="new-task-container-submit">
                        <form id="form-add-task" action="">
                            <input class="btn-style" type="submit" id="new-task-submit" value="+" title="Ajouter">
                            <input class="input-style" type="text" id="new-task-input" placeholder="Ajouter une tâche">
                        </form>
                    </div>
                    <div class="header-completed-tasks">
                        <h4>Terminées</h4>
                        <button id="deleteDefBtn" title="Effacer toutes les tâches">
                            <p>Effacer les tâches terminées</p>
                            <i class="fa-sharp fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                    <div id="completed-tasks-container">
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="image-container">
            <img src="/images/duck-footer.svg">
        </div>
        <?php include 'layout/footer.phtml'; ?>
    </footer>

    <script type="text/javascript" src="scripts/main.js"></script>
    </body>