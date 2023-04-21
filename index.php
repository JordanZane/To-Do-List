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

                </div>
            </div>
        </div>
    </main>
    <footer>
        <?php include 'layout/footer.phtml'; ?>
    </footer>

    <script type="text/javascript" src="scripts/main.js"></script>
    </body>