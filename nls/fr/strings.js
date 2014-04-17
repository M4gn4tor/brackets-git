/*jshint maxlen:false */

define({
    // ADVANCED_FEATURES_WARNING:          "This features are not recommended for basic Git users as they may cause you to lose code that has been already commited if used inproperly. Use with caution.",
    ADVANCED_FEATURES_WARNING:             "Cette fonctionnalité n’est pas recommandée pour les utilsateurs de Git débutants car cela pourrait vous faire perdre votre code sur le serveur en cas de mauvaise utilisation. Utilisez-la avec prudence.",
    // ADD_ENDLINE_TO_THE_END_OF_FILE:     "Add endline at the end of file",
    ADD_ENDLINE_TO_THE_END_OF_FILE:        "Ajouter un saut de ligne à la fin du fichier",
    // ADD_TO_GITIGNORE:                   "Add to .gitignore",
    ADD_TO_GITIGNORE:                      "Ajouter au .gitignore",
    // AMEND_COMMIT:                       "Amend last commit",
    AMEND_COMMIT:                          "Modifier le dernier commit",
    // AMEND_COMMIT_FORBIDDEN:             "Cannot amend commit when there are no unpushed commits",
    AMEND_COMMIT_FORBIDDEN:                "Impossible de modifier le commit quand il n’y a pas de commit en attente de push",
    // AUTHOR:                             "Author",
    AUTHOR:                                "Auteur",
    // AUTHORS_OF:                         "Authors of",
    AUTHORS_OF:                            "Auteurs de",
    // BASH_NOT_AVAILABLE:                 "Bash is not available or properly configured",
    BASH_NOT_AVAILABLE:                    "La console Bash n’est pas disponible ou n’est pas proprement configuré",
    // BASIC_CONFIGURATION:                "Basic configuration",
    BASIC_CONFIGURATION:                   "Configuration basique",
    // BRACKETS_GIT_ERROR:                 "Brackets Git encountered an error\u2026",
    BRACKETS_GIT_ERROR:                    "Brackets Git a rencontré une erreur\u2026",
    // BRANCH_NAME:                        "Branch name",
    BRANCH_NAME:                           "Nom de la branche",
    // BUTTON_CANCEL:                      "Cancel",
    BUTTON_CANCEL:                         "Annuler",
    // BUTTON_CHANGELOG:                   "Show changelog",
    BUTTON_CHANGELOG:                      "Voir le journal des changements",
    // BUTTON_CLOSE:                       "Close",
    BUTTON_CLOSE:                          "Fermer",
    // BUTTON_DEFAULTS:                    "Restore defaults",
    BUTTON_DEFAULTS:                       "Restaurer les paramètres par défaut",
    // BUTTON_OK:                          "OK",
    BUTTON_OK:                             "OK",
    // BUTTON_REPORT:                      "Report",
    BUTTON_REPORT:                         "Signaler",
    // BUTTON_SAVE:                        "Save",
    BUTTON_SAVE:                           "Enregistrer",
    // BUTTON_COMMIT:                      "Commit",
    BUTTON_COMMIT:                         "Committer",
    // BUTTON_INIT:                        "Init",
    BUTTON_INIT:                           "Initialiser",
    // BUTTON_CLONE:                       "Clone",
    BUTTON_CLONE:                          "Cloner",
    // BUTTON_CHECKOUT_COMMIT:             "Checkout",
    BUTTON_CHECKOUT_COMMIT:                "Récupérer",
     BUTTON_RESET:                         "Réinitialiser l’index",
    // TODO: localize BUTTON_RESET to fr
    // BUTTON_RESET_HARD:                  "Reset to this commit and discard the changes that came after it. (reset --hard)",
    BUTTON_RESET_HARD:                     "Revenir à ce commit et abandonner tous les changements après celui-ci. (reset --hard)",
    // BUTTON_RESET_SOFT:                  "Reset to this commit and retain changes that came after it staged for a new commit. (reset --soft)",
    BUTTON_RESET_SOFT:                     "Revenir à ce commit en retenant les changements prêt à être committés. (reset --soft)", // NOT SURE
    // BUTTON_RESET_MIXED:                 "Reset to this commit and retain changes that came after it unstaged. (reset --mixed)",
    BUTTON_RESET_MIXED:                    "Revenir à ce commit en retenanr les changements non indexés. (reset --mixed)",
    // CHANGELOG:                          "Changelog",
    CHANGELOG:                             "Journal des changements",
    // CHANGE_USER_NAME:                   "Change git username",
    CHANGE_USER_NAME:                      "Changer le nom d’utilisateur git",
    // CHANGE_USER_EMAIL:                  "Change git email",
    CHANGE_USER_EMAIL:                     "Changer l’adresse email git",
    // CHECK_GIT_SETTINGS:                 "Check Git settings",
    CHECK_GIT_SETTINGS:                    "Vérifier les paramètres Git",
    // CODE_INSPECTION_PROBLEMS:           "Code inspection problems:",
    CODE_INSPECTION_PROBLEMS:              "Problèmes lors de l’inspection du code :",
    // COMMAND_ARGUMENTS:                  "Command arguments",
    COMMAND_ARGUMENTS:                     "Arguments de la commande",
    // COMMIT:                             "Commit",
    COMMIT:                                "Committer",
    // COMMIT_ALL_SHORTCUT:                "Commit all files",
    COMMIT_ALL_SHORTCUT:                   "Committer tous les fichiers",
    // COMMIT_CURRENT_SHORTCUT:            "Commit current file",
    COMMIT_CURRENT_SHORTCUT:               "Committer le fichier actif",
    // COMMIT_MESSAGE_PLACEHOLDER:         "Enter commit message here\u2026",
    COMMIT_MESSAGE_PLACEHOLDER:            "Entrez le message de commit\u2026",
    // CLONE_REPOSITORY:                   "Clone repository",
    CLONE_REPOSITORY:                      "Cloner le Dépôt",
    // CREATE_NEW_BRANCH:                  "Create new branch\u2026",
    CREATE_NEW_BRANCH:                     "Créer une nouvelle branche\u2026",
    // CREATE_NEW_REMOTE:                  "Create new remote\u2026",
    CREATE_NEW_REMOTE:                     "Créer un nouveau Dépôt distant\u2026",
    // CREATE_NEW_GITFTP_SCOPE:            "Create new Git-FTP remote\u2026",
    CREATE_NEW_GITFTP_SCOPE:               "Créer un nouveau Dépôt distant FTP\u2026",
    // CUSTOM_TERMINAL_COMMAND:            "Custom terminal command (sample: gnome-terminal or complete path to executable)",
    CUSTOM_TERMINAL_COMMAND:               "Commande terminal personnalisée (exemple : gnome-terminal ou le lien complet vers l’exécutable)",
    // CUSTOM_TERMINAL_COMMAND_HINT:       "Sample arguments: --window --working-directory=$1<br>$1 in arguments will be replaced by current project directory.",
    CUSTOM_TERMINAL_COMMAND_HINT:          "Arguments exemple : --window --working-directory=$1<br>$1 dans les arguments sera remplacé par le dossier du projet actuel.",
    // DATE_FORMAT:                        "YYYY-MM-DD HH:mm:ss",
    DATE_FORMAT:                           "DD-MM-YYYY HH:mm:ss",
    // DATE_MODE_0:                        "Formatted using local date format",
    DATE_MODE_0:                           "Formaté en suivant le format de date local",
    // DATE_MODE_1:                        "Relative time",
    DATE_MODE_1:                           "Temps relatif",
    // DATE_MODE_2:                        "Intelligent mode (relative/formatted)",
    DATE_MODE_2:                           "Mode intelligent (relatif/formaté)",
    // DATE_MODE_3:                        "Formatted using your own format",
    DATE_MODE_3:                           "Formaté suivant votre propre format",
    // DATE_MODE_4:                        "Original Git date",
    DATE_MODE_4:                           "Date Git originale",
    // DEBUG:                              "Debug",
    DEBUG:                                 "Débogger",
    // DEBUG_MODE_SETTING:                 "DEBUG mode &mdash; Leave this OFF unless you need to find a problem with the extension. All Git communication will be forwarded to Brackets console!",
    DEBUG_MODE_SETTING:                    "Mode DEBUG mdash; Laissez ceci désactivé sauf si vous avez un problème avec l’extension. Toute les communications Git seront redirigées vers la console de Brackets !",
    // DELETE_FILE:                        "Delete file",
    DELETE_FILE:                           "Supprimer le fichier",
    // DELETE_REMOTE:                      "Delete remote",
    DELETE_REMOTE:                         "Supprimer le Dépôt distant",
    // DELETE_REMOTE_NAME:                 "Do you really wish to delete remote \"{0}\"?",
    DELETE_REMOTE_NAME:                    "Êtes-vous sûr de vouloir supprimer le Dépôt distant \"{0}\" ?",
    // DELETE_LOCAL_BRANCH:                "Delete local branch",
    DELETE_LOCAL_BRANCH:                   "Supprimer la branche locale",
    // DELETE_LOCAL_BRANCH_NAME:           "Do you really wish to delete local branch \"{0}\"?",
    DELETE_LOCAL_BRANCH_NAME:              "Êtes-vous sûr de vouloir supprimer la branche locale \"{0}\" ?",
    // TITLE_CHECKOUT:                     "Do you really wish to checkout this commmit?",
    TITLE_CHECKOUT:                        "Voulez-vous vraiment récupérer ce commit ?",
    // DIALOG_CHECKOUT:                    "When checking out a commit, the repo will go into a DETACHED HEAD state. You can't make any commits unless you create a branch based on this.",
    DIALOG_CHECKOUT:                       "En sélectionnant ce commit, la répo passerat en mode DETACHED HEAD. Il n’est pas possible de committer tant qu’une nouvelle branche basée là-dessus n’est pas créée",
    // TITLE_RESET:                        "Do you really wish to reset?",
    TITLE_RESET:                           "Voulez-vous vraiment le remettre (reset) ?",
    // DIALOG_RESET_HARD:                  "You will lose all changes after this commit!",
    DIALOG_RESET_HARD:                     "Vous allez perdre tous vos changement après ce commit!",
    // DIALOG_RESET_MIXED:                 "Changes after this commit will be unstaged.",
    DIALOG_RESET_MIXED:                    "Les changements après ce commit seront oubliées (unstaged)",
    // DIALOG_RESET_SOFT:                  "Changes after this commit will be staged for a new commmit.",
    DIALOG_RESET_SOFT:                     "Les changements après ce commit seront stockées (staged) pour un nouveau commit.",
    // DIFF:                               "Diff",
    DIFF:                                  "Différences",
    // DIFF_FAILED_SEE_FILES:              "Git diff failed to provide diff results. This is the list of staged files to be commited:",
    DIFF_FAILED_SEE_FILES:                 "L’outil de différences git n’a pas réussi à fournir de résultat diff. Ceci est la liste des fichiers en attente d’être commités :",
    // ENTER_PASSWORD:                     "Enter password:",
    ENTER_PASSWORD:                        "Entrez le mot de passe :",
    // ENTER_USERNAME:                     "Enter username:",
    ENTER_USERNAME:                        "Entrez le nom d’utilisateur :",
    // ENTER_REMOTE_GIT_URL:               "Enter Git URL of the repository you want to clone:",
    ENTER_REMOTE_GIT_URL:                  "Entrez l’adresse Git du Dépôt à cloner :",
    // ENTER_REMOTE_NAME:                  "Enter name of the new remote:",
    ENTER_REMOTE_NAME:                     "Entrez le nom du nouveau Dépôt distant :",
    // ENTER_GITFTP_SCOPE_NAME:            "Enter name of the new Git-FTP remote:",
    ENTER_GITFTP_SCOPE_NAME:               "Entrer le nom pour le nouveau Dépôt Distant FTP",
    // ENTER_REMOTE_URL:                   "Enter URL of the new remote:",
    ENTER_REMOTE_URL:                      "Entrez l’adresse du nouveau Dépôt distant :",
    // ENTER_GITFTP_SCOPE_URL:             "Enter FTP URL of the new Git-FTP remote specifing username and password:",
    ENTER_GITFTP_SCOPE_URL:                "Entre l’URL FTP du nouveau dép^t en spécifiant le nom d’utilisateur et le mot de passe:",
    // ERROR_TERMINAL_NOT_FOUND:           "Terminal was not found for your OS, you can define a custom Terminal command in the settings",
    ERROR_TERMINAL_NOT_FOUND:              "Terminal n’a pas été trouvé sur votre OS, vous pouvez définir une commande terminal personnalisée dans les paramètres",
    // ERROR_CONNECT_NODEJS:               "Failed to connect to NodeJS. If you just updated the extension close all instances of Brackets and try starting again.",
    ERROR_CONNECT_NODEJS:                  "Impossible de se connecter à NodeJS. Si vous venez de mettre à jour l’exention fermez toutes les instances de Brackets et redémarrez.",
    // EXTENDED_COMMIT_MESSAGE:            "EXTENDED",
    EXTENDED_COMMIT_MESSAGE:               "ETENDU",
    // EXTENSION_WAS_UPDATED_TITLE:        "The extension was updated to {0}",
    EXTENSION_WAS_UPDATED_TITLE:           "L’extension a été mise à jour en {0}",
    // ENTER_NEW_USER_NAME:                "Enter username",
    ENTER_NEW_USER_NAME:                   "Entrez le nom d’utilisateur",
    // ENTER_NEW_USER_EMAIL:               "Enter email",
    ENTER_NEW_USER_EMAIL:                  "Entrez l’adresse email",
    // ENABLE_ADVANCED_FEATURES:           "Enable advanced features",
    ENABLE_ADVANCED_FEATURES:              "Activer les fonctionnalitées avancées",
    // FEATURES:                           "Features",
    FEATURES:                              "Fonctionnalités",
    // FILE_STAGED:                        "Staged",
    FILE_STAGED:                           "Suivi",
    // FILE_UNMODIFIED:                    "Unmodified",
    FILE_UNMODIFIED:                       "Non modifié",
    // FILE_IGNORED:                       "Ignored",
    FILE_IGNORED:                          "Ignoré",
    // FILE_UNTRACKED:                     "Untracked",
    FILE_UNTRACKED:                        "Non suivi",
    // FILE_MODIFIED:                      "Modified",
    FILE_MODIFIED:                         "Modifié",
    // FILE_ADDED:                         "New file",
    FILE_ADDED:                            "Nouveau fichier",
    // FILE_DELETED:                       "Deleted",
    FILE_DELETED:                          "Supprimé",
    // FILE_RENAMED:                       "Renamed",
    FILE_RENAMED:                          "Renommé",
    // FILE_COPIED:                        "Copied",
    FILE_COPIED:                           "Copié",
    // FILE_UNMERGED:                      "Unmerged",
    FILE_UNMERGED:                         "Non fusionné",
    // FOR_MAC_LINUX_USERS:                "For Mac/Linux users",
    FOR_MAC_LINUX_USERS:                   "Pour les utilisateurs Mac/Linux",
    // FOR_WINDOWS_USERS:                  "For Windows users",
    FOR_WINDOWS_USERS:                     "Pour les utilisateurs Windows",
    // GIT_COMMIT:                         "Git commit\u2026",
    GIT_COMMIT:                            "Git commit\u2026",
    // GIT_CONFIGURATION:                  "Git configuration",
    GIT_CONFIGURATION:                     "Configuration Git",
    // GIT_DIFF:                           "Git diff &mdash;",
    GIT_DIFF:                              "Git diff &mdash;",
    // GIT_IS_IN_PATH:                     "Git can be called from anywhere (is in system path, might not work on Mac)",
    GIT_IS_IN_PATH:                        "Git peut être appelé de n’importe ou (il est dans le chemin système, peut ne pas fonctionner sous Mac)",
    // GIT_PULL_RESPONSE:                  "Git Pull response",
    GIT_PULL_RESPONSE:                     "Réponse Git Pull (Récupérer)",
    // GIT_PUSH_RESPONSE:                  "Git Push response",
    GIT_PUSH_RESPONSE:                     "Réponse Git Push (Pousser)",
    // GITFTP_PUSH_RESPONSE:               "Git-FTP Push response",
    GITFTP_PUSH_RESPONSE:                  "Réponse Git-FTP Push (Pousser)",
    // GIT_SETTINGS:                       "Git Settings\u2026",
    GIT_SETTINGS:                          "Paramètres Git\u2026",
    // GIT_REMOTES:                        "Git remotes",
    GIT_REMOTES:                           "Dépôts distants Git",
    // GITFTP_SCOPES:                      "Git-FTP remotes",
    GITFTP_SCOPES:                         "Dépôts distant Git-FTP",
    // GOTO_PREVIOUS_GIT_CHANGE:           "Go to previous Git change",
    GOTO_PREVIOUS_GIT_CHANGE:              "Aller au changement Git précédent",
    // GOTO_NEXT_GIT_CHANGE:               "Go to next Git change",
    GOTO_NEXT_GIT_CHANGE:                  "Aller au changement Git suivant",
    // HIDE_UNTRACKED:                     "Hide untracked",
    HIDE_UNTRACKED:                        "Cacher les fichiers non traqués",
    // INIT_GITFTP_SCOPE:                  "Initialize Git-FTP remote",
    INIT_GITFTP_SCOPE:                     "Initialiser les dépôts ditsants Git-FTP",
    // INIT_GITFTP_SCOPE_NAME:             "Initialize Git-FTP remote \"{0}\"?",
    INIT_GITFTP_SCOPE_NAME:                "Initialiser les dépôts ditsants Git-FTP \"{0}\" ?",
    // LAUNCH_BASH_SHORTCUT:               "Bash/Terminal shortcut",
    LAUNCH_BASH_SHORTCUT:                  "Raccourci Bash/Terminal",
    // LOADING:                            "Loading\u2026",
    LOADING:                               "Chargement\u2026",
    // LINES:                              "Lines",
    LINES:                                 "Lignes",
    // _LINES:                             "lines",
    _LINES:                                "lignes",
    // LIST_MODIFIED_FILES:                "Modified files",
    LIST_MODIFIED_FILES:                   "Fichiers modifiés",
    // MARK_MODIFIED_FILES_IN_TREE:        "Mark modified files in file tree",
    MARK_MODIFIED_FILES_IN_TREE:           "Marquer les fichiers modifiés dans l’arborescence",
    // MERGE_BRANCH:                       "Merge branch",
    MERGE_BRANCH:                          "Fusionner la branche",
    // MERGE_RESULT:                       "Merge result",
    MERGE_RESULT:                          "Résultat de la fusion",
    // MERGE_MESSAGE:                      "Merge message",
    MERGE_MESSAGE:                         "Message pour la fusion",
    // NORMALIZE_LINE_ENDINGS:             "Normalize line endings (to \\n)",
    NORMALIZE_LINE_ENDINGS:                "Normaliser les fins de lignes (vers \\n)",
    // NOTHING_TO_COMMIT:                  "Nothing to commit, working directory clean.",
    NOTHING_TO_COMMIT:                     "Rien à commiter, répertoire de travail vide.",
    // ORIGIN_BRANCH:                      "Origin branch",
    ORIGIN_BRANCH:                         "Branche d’origine",
    // PANEL_COMMAND:                      "Show Git panel",
    PANEL_COMMAND:                         "Voir le panneau Git",
    // PANEL_SHORTCUT:                     "Toggle panel",
    PANEL_SHORTCUT:                        "Basculer le panneau",
    // PASSWORDS:                          "Passwords",
    PASSWORDS:                             "Mots de passe",
    // PATH_TO_GIT_EXECUTABLE:             "Path to Git executable",
    PATH_TO_GIT_EXECUTABLE:                "Chemin de l’exécutable Git",
    // PATH_TO_GIT_MSYSGIT:                "Path to msysgit folder",
    PATH_TO_GIT_MSYSGIT:                   "Chemin du dossier msysgit",
    // PULL_SHORTCUT:                      "Pull from remote repository",
    PULL_SHORTCUT:                         "Récupérer (Pull) depuis le dépôt distant",
    // PUSH_SHORTCUT:                      "Push to remote repository",
    PUSH_SHORTCUT:                         "Pousser (Push) sur le dépôt distant",
    // Q_DELETE_FILE:                      "Are you sure you wish to delete the file <span class='dialog-filename'>{0}</span>?",
    Q_DELETE_FILE:                         "Êtes-vous sûr de vouloir supprimer le fichier <span class='dialog-filename'>{0}</span> ?",
    // Q_RESTART_BRACKETS:                 "Do you wish to restart Brackets to apply new settings?",
    Q_RESTART_BRACKETS:                    "Souhaitez-vous redémarrer Brackets pour appliquer les nouveaux paramètres ?",
    // Q_UNDO_CHANGES:                     "Reset changes to file <span class='dialog-filename'>{0}</span>?",
    Q_UNDO_CHANGES:                        "Annuler les modifications du fichier <span class='dialog-filename'>{0}</span> ?",
    // REMOVE_BOM:                         "Remove BOM from files",
    REMOVE_BOM:                            "Supprimer les BOM des fichiers",
    // REMOVE_FROM_GITIGNORE:              "Remove from .gitignore",
    REMOVE_FROM_GITIGNORE:                 "Supprimer du .gitignore",
    // RESTART:                            "Restart",
    RESTART:                               "Redémarrer",
    // RESET_LOCAL_REPO:                   "Discard all changes since last commit",
    RESET_LOCAL_REPO:                      "Annuler tous les changements depuis le dernier commit",
    // RESET_LOCAL_REPO_CONFIRM:           "Do you wish to discard all changes done since last commit? This action can't be reverted.",
    RESET_LOCAL_REPO_CONFIRM:              "Voulez-vous annuler tous les changements depuis le dernier commit ? Ceci ne peut pas être défait.",
    // SAVE_PASSWORD_QUESTION:             "Save username/password?",
    SAVE_PASSWORD_QUESTION:                "Enregistrer nom d’utilisateur/mot de passe ?",
    // SET_ORIGIN_URL:                     "Set origin URL",
    SET_ORIGIN_URL:                        "Définir l’adresse d’origine",
    // SHORTCUTS:                          "Shortcuts",
    SHORTCUTS:                             "Raccourcis",
    // SHORTCUTS_HINT:                     "Separate keys with dash, like this: Ctrl-Alt-G<br>You can use the english key identifiers Ctrl, Cmd (Mac), Alt and Shift.",
    SHORTCUTS_HINT:                        "Touches séparées par un tiret, comme ceci : Ctrl-Alt-G<br>Vous pouvez utiliser les identifiants anglais des touches comme Ctrl, Cmd (Mac), Alt et Shift.",
    // SHOW_BASH_TERMINAL_BUTTON:          "Show Bash/Terminal button in the panel",
    SHOW_BASH_TERMINAL_BUTTON:             "Afficher le bouton Bash/Terminal dans le panneau",
    // SHOWN_DATE_FORMAT:                  "Format of commit dates in history",
    SHOWN_DATE_FORMAT:                     "Format des dates de commit dans l’historique",
    // SHOW_REPORT_BUG_BUTTON:             "Show Report Bug button in the panel",
    SHOW_REPORT_BUG_BUTTON:                "Afficher le bouton de signalement de bugs dans le panneau",
    // SHOW_UNTRACKED:                     "Show untracked",
    SHOW_UNTRACKED:                        "Afficher les fichiers non-traqués",
    // STRIP_WHITESPACE_FROM_COMMITS:      "Strip trailing whitespace from commits",
    STRIP_WHITESPACE_FROM_COMMITS:         "Retirer les espaces vides de queue lors des commits",
    // TARGET_BRANCH:                      "Target branch",
    TARGET_BRANCH:                         "Branche cible",
    // TOOLTIP_BUG:                        "Report bug",
    TOOLTIP_BUG:                           "Signaler un bug",
    // TOOLTIP_OPEN_BASH:                  "Open Bash/Terminal console",
    TOOLTIP_OPEN_BASH:                     "Ouvrir la console Bash/Terminal",
    // TOOLTIP_PULL:                       "Git Pull",
    TOOLTIP_PULL:                          "Git Pull (Récupérer)",
    // TOOLTIP_PUSH:                       "Git Push",
    TOOLTIP_PUSH:                          "Git Push (Pousser)",
    // TOOLTIP_GITPUSH:                    "Git-FTP Push",
    TOOLTIP_GITPUSH:                       "Git-FTP Push (Pousser)",
    // TOOLTIP_CLOSE_NOT_MODIFIED:         "Close files not modified in Git",
    TOOLTIP_CLOSE_NOT_MODIFIED:            "Fermer les fichiers non modifiés dans Git",
    // TOOLTIP_INIT:                       "Initialize repository",
    TOOLTIP_INIT:                          "Initialiser le dépôt",
    // TOOLTIP_CHECKOUT_COMMIT:            "Checkout a specific commit",
    TOOLTIP_CHECKOUT_COMMIT:               "Récuperer un commit spécifique",
    // TOOLTIP_CLONE:                      "Clone existing repository",
    TOOLTIP_CLONE:                         "Cloner le dépôt existant",
    // TOOLTIP_COMMIT:                     "Commit the selected files",
    TOOLTIP_COMMIT:                        "Commiter les fichiers sélectionnés",
    // TOOLTIP_REFRESH_PANEL:              "Refresh panel",
    TOOLTIP_REFRESH_PANEL:                 "Actualiser le panneau",
    // TOOLTIP_HIDE_HISTORY:               "Hide history",
    TOOLTIP_HIDE_HISTORY:                  "Cacher l’historique",
    // TOOLTIP_SHOW_HISTORY:               "Show history",
    TOOLTIP_SHOW_HISTORY:                  "Afficher l’historique",
    // TOOLTIP_HIDE_FILE_HISTORY:          "Hide file history",
    TOOLTIP_HIDE_FILE_HISTORY:             "Cacher l’historique des fichiers",
    // TOOLTIP_SHOW_FILE_HISTORY:          "Show file history",
    TOOLTIP_SHOW_FILE_HISTORY:             "Montrer l’historique des fichiers",
    // TOOLTIP_PICK_REMOTE:                "Pick preferred remote",
    TOOLTIP_PICK_REMOTE:                   "Choisir le dépôt distant préféré",
    // TOOLTIP_MORE:                       "More actions\u2026",
    TOOLTIP_MORE:                          "Plus d’options\u2026",
    // USER_ABORTED:                       "User aborted!",
    USER_ABORTED:                          "Annulation de l’utilisateur !",
    // UNDO_CHANGES:                       "Discard changes",
    UNDO_CHANGES:                          "Annuler les changements",
    // UNDO_LAST_LOCAL_COMMIT:             "Undo last local (not pushed) commit",
    UNDO_LAST_LOCAL_COMMIT:                "Annuler le dernier commit local (non poussé)",
    // URL:                                "URL",
    URL:                                   "URL",
    // USE_CODE_INSPECTION:                "Use Code inspection",
    USE_CODE_INSPECTION:                   "Utiliser l’inspection du Code",
    // USE_GIT_GUTTER:                     "Use Git gutter marks",
    USE_GIT_GUTTER:                        "Utiliser le marquage Git gutter",
    // USER_DATE_FORMAT:                   "Own date format (<a href='http://momentjs.com/docs/#/displaying/format/'>Syntax</a>)",
    USER_DATE_FORMAT:                      "Date format personnalisé (<a href='http://momentjs.com/docs/#/displaying/format/'>Syntaxe</a>)",
    // USE_GITFTP:                         "Use Git-FTP",
    USE_GITFTP:                            "Utiliser Git-FTP",
    // USING_GIT_VERSION:                  "Git version",
    USING_GIT_VERSION:                     "Version de Git",
    // VIEW_AUTHORS_SELECTION:             "View authors of selection",
    VIEW_AUTHORS_SELECTION:                "Voir les auteurs de la sélection",
    // VIEW_AUTHORS_FILE:                  "View authors of file"
    VIEW_AUTHORS_FILE:                     "Voir les auteurs du fichier"
});
