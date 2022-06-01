#  Projet d'integration
### - Diego Eugenio Bayancela - 0612672
### - Nicolas Bergeron - 1358189
### - Olivier Lamoureux-Vaillancourt - 1554394
### - Arnaud Provencal - 1106640
### - Gustavo Adolfo Roldan - 6172781
### - Alain Dominique Senatus - 

***
## Normes de programmation
- Language: JavaScript
- Library: React
- FrameWork: Next.js
- Base de donnees: MongoDB?
- Plateforme de deployment : Vercel

### Recommandation générale 
On permet n'importe quelle violation du guide si elle augmente la lisibilité. Le but principal de la recommandation est d'améliorer la lisibilité et de ce fait l'organisation et la qualité générale du code. Il est impossible de couvrir tous les cas spécifiques d'un guide général et le programmeur doit être flexible. Le lecteur est invité à faire montre de jugement. Si une pratique est inutile, inapplicable, voire contreproductive au regard des contraintes d'un projet ou des objectifs corporatifs, soyons assez intelligents pour y déroger.
Conventions de nomenclature 
Nous énumérons ici les règles à suivre pour assurer la lisibilité et la cohérence pour tous les noms que vous donnerez à vos variables, classes, etc.

### Nommer une variable :  
 - Le premier caractère doit être une lettre ; 
 - L'espace, le point, et les caractères spéciaux !, @, &, $ et # ne sont pas permis, mais le caractère _ (souligné) peut être utilisé ; 
 - Le nom doit être unique à l'intérieur de sa portée
 - Le nom doit être significatif et explicite; 
 - Des abréviations peuvent être utilisées, mais elles doivent êtres explicites
 - Bons exemples : age, prenom, montant_total, nombre_lignes_vides, nb_lignes_vides 
 - Mauvais exemples : a, pnom, montanttotal, NombreLignesVides, nbr_lg_vds

### Nom des constantes 
- Le nom doit être significatif et explicite ; 
- Toutes les lettres formant le nom doivent être MAJUSCULES ; 
- Le caractère _ (souligné) doit être utilisé pour séparer les mots ; 
- Les caractères accentués (É, À, Ê, Ç, etc.) peuvent être utilisés ou non ; 
- Des abréviations peuvent être utilisées, mais elles doivent êtres explicites.
- Bons exemple: PI, TPS, POURCENTAGE_POURBOIRE, ADRESSE_DEPART_CELLULE, ADR_DEPART_CELL 
- Mauvais exemples : P, tps, PourcentagePourboire, ADRESSEDEPARTCELLULE, ADR_DPT_CL


### Nom des classes et des sous-classes
- Les mêmes règles au nom des classes et des sous-classes qu’au nom des variables et des constantes. Plus, nous ajoutons les règles suivantes :
- Le nom doit illustrer l’utilité d’une procédure ou la valeur de retour d’une fonction ; 
- La première lettre de chaque mot formant le nom doit être MAJUSCULE et toutes les autres lettres, minuscules ; 
- Le caractère _ (souligné) doit être utilisé pour séparer les mots ; 
- Les caractères accentués (é, à, ê, ç, etc.) peuvent être utilisés ou non ; 
- Des abréviations peuvent être utilisées, mais elles doivent êtres explicites.
- Bons exemples : Afficher_Infos Calculer_Coordonnées Est_Impair Est_Une_Lettre Sinus 
- Mauvais exemples : Afficher Calculer afficherinfos CalculerCoordonnées Fonction_2

### Indentation et aération du code source 
- L’indentation et l’aération du code source sont essentielles pour que le code source soit lisible par un être humain. L’indentation représente l’espace laissé entre la marge de gauche et le début de la ligne de code. 
- L’aération est la ligne vide laissée entre deux blocs de code. Un bloc de code regroupe les instructions d’un même « niveau » et d’une même « idée ». Le corps d’une procédure ou d’une fonction est formé par un ou plusieurs blocs de code qui s’exécutent les uns après les autres. 
- Chaque bloc de code commence par un commentaire et est isolé des autres blocs de code par une ligne vide. Une seule ligne vide suffit pour séparer deux blocs de code.
- Lorsqu’une instruction doit être écrite sur plus d’une ligne pour faciliter la lecture ou l’impression du code source, la deuxième ligne et les suivantes doivent être indentées par rapport à la première ligne d’une ou de plusieurs tabulations.	

### Commentaires dans le code source 
- Les commentaires dans le code source sont essentiels pour comprendre le code source une fois qu’il a été écrit, par soi-même ou par d’autres. Un bon commentaire doit être écrit dans en français ou en anglais et doit être autant que possible exempt d’erreurs. 
- Tout d’abord, toutes les variables déclarées doivent être commentées, même celles qui semblent évidentes. Le commentaire est placé sur la même ligne que la déclaration et tous les commentaires sont alignés ensemble. Ensuite, tous les blocs de code doivent commencer par un commentaire indiquant, ce que réalisent les quelques lignes qui suivent. Si une logique complexe est utilisée, elle est expliquée dans ce commentaire. Les boucles doivent être décrites au début de celles-ci et non à la fin, même si la condition de boucle est placée à la fin. Les commentaires de blocs de code doivent avoir la même indentation que le bloc de code commenté. 
- Les commentaires ne doivent pas comporter de caractères accentués(à, é, è, ô, etc.) Il faut remplacer les accents par la lettre équivalente (à devient a, é devient e, è devient e, etc.).

### Sites de Référence : 
https://cours.etsmtl.ca/seg/ethe/inf130/Norme_INF130.pdf <br/>
https://www.studocu.com/fr-ca/course/ecole-de-technologie-superieure/ordinateur-et-programmation/3345432



***

## ProjetGo
Le client ProjetGo est un organisme à but non lucratif qui aide les communautés à monter des projets collectifs au
Québec, ailleurs au Canada et à l’étranger. Le projet est né en réponse à l’attitude plus que questionnable de la
compagnie GoFundMe et ProjetGo assure soutenir tout projet s’opposant à la tyrannie.
But du projet : créer une application web, mobile ou de bureau, qui sera une vitrine pour lorganisme ProjetGo et
ses réalisations et qui permettra la création de comptes utilisateurs et de projets.
### Les membres
- Toute personne peut s’enregistrer comme membre.
- Pour devenir membre, il faut payer une cotisation annuelle dont le montant.
- Un membre connecté peut créer des projets.
- Les informations essentielles sur les membres sont : nom, prénom, email, numéro de téléphone, adresse, date
adhésion, statut adhésion (peut être : actif, terminé, attente cotisation, gelé).
- Il y a aussi la possibilité d’être administrateur (tous les droits sur le site).
- Il y a aussi la possibilité d’être bénévole. Un bénévole doit avoir les mêmes informations quun membre mais
nest pas assujetti à une cotisation. Un bénévole peut s’inscrire à un projet, mais ne peut pas faire de don.
### Les projets
- Seuls les membres en règle (qui ont payé leur cotisation) peuvent proposer à lorganisme des projets à financer.
- Le projet est soumis au conseil dadministration pour approbation. Le conseil d’administration est composé
des deux administrateurs de l’application.
- La liste des projet approuvés est disponible sur l’application
- Si on clique sur un projet, les informations sur les projets sont scindées en trois niveaux :
1. Information accessible au public et aux bénévoles : code projet, titre projet, description courte, sommaire
du projet (décrivant son but, ses objectifs et ses bénéfices escomptés), budget, date début, date fin et
fonds amassés)
2. Information accessible aux membres du projet : Tout ce qui précède en plus de la liste des membres et
des bénévoles participant au projet.
3. Administrateurs et membre ayant créé le projet : Tout ce qui précède en plus d’options permmettant de
modifier les informations du projet, ou même de le supprimer.
### Les dons
- Toute personne peut faire un don pour aider le projet de son choix.
- Un formulaire permet de faire un don en remplissant les informations suivantes : date don, montant du
don, type de paiement, information donateur (nom, prénom, email, numéro de téléphone, adresse), projet.
- Un don est fait pour un projet spécifique et le montant est ajouté au total des fonds amassés.
