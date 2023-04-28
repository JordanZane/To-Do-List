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
                    <div class="completed-tasks-container">
                        <h4>Terminées</h4>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <?php include 'layout/footer.phtml'; ?>
    </footer>

    <script type="text/javascript" src="scripts/main.js"></script>
    </body>