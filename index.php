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
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <h3>Mes listes</h3>
                    <form id="new-list-form">
                        <div class="new-list-container">
                            <input class="input-style" type="text" id="new-list-input" placeholder="Créer une liste">
                            <input class="btn-style" type="submit" id="new-list-submit" value="+" title="Ajouter">
                        </div>
                    </form>
                    <div id="lists-container">

                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row">
                        <!--Add list name h3-->
                        <h4>En cours</h4>
                        <div id="tasks-container">

                        </div>
                    </div>
                    <div class="row">
                        <div class="new-task-container">
                            <input class="input-style" type="text" id="new-task-input" placeholder="Ajouter une tâche">
                            <input class="btn-style" type="submit" id="new-task-submit" value="+" title="Ajouter">
                        </div>
                    </div>
                    <div class="row">
                        <h4>Terminées</h4>
                        <div class="completed-tasks">
                            
                        </div>
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