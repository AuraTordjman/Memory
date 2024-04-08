# Aura Tordjman (MIN 1) et Alix Levrier (MIN 1)
# Réponses aux questions

1. Le fichier _package-lock.json_ est utilisé pour figer les versions exactes des dépendances installées, alors que _package.json_ est un fichier de configuration qui répertorie les dépendances d'un projet et leurs versions autorisées.
   Cela garantit que toutes les personnes travaillant sur le projet utilisent les mêmes versions de dépendances.

2. Ce format de version des dépendances npm à 3 nombres est appelé "Semantic Versioning". Ce sont 3 nombres séparés par des points (exemple: 5.10.3)

3. Une **Dependency** est un package nécessaire au bon fonctionnement de l'application en production (installé quand on exécute `npm install`). Une **devDependency** est une dépendance utilisée uniquement pour le développement du projet (exemple: Babel, Webpack) mais n'est nécessaire pour exécuter le projet en production. 

4. Une IIFE est une fonction JS qui est définie et appelée immédiatement après sa déclaration. Elle était utilisée pour créer un contexte fermé où les variables pouvaient être protégées contre l'accès global. Les arrow functions en ES6 sont maintenant une alternative plus courte et efficace pour atteindre le même objectif.

5. * `import * from './utils'` importe tous les objets exportés du module './utils'
   * `import { parseUrl } from './utils'` n'importe que l'objet nommé 'parseUrl'. 
   On choisit la méthode d'import en fonction du nombre d'objets à exporter. Il est préférable d'importer uniquement les parties de codes nécéssaires.

6. * Une classe Java peut hériter de plusieurs autres classes alors qu'en ES6 une classe peut seulement hériter d'une seule autre classe, on parle d'héritage multiple en Java.
   * Java offre des niveaux de visibilité comme 'public', 'private', 'protected' qui ne sont pas disponibles en ES6.

7. `var` est fonction-scoped tandis que `let` est block-scoped, de plus, `var` est sujette à l'hoisting (Peu importe où on déclare var dans le code, JS la déplace au début de la fonction ou de la portée globale dans laquelle elle est déclarée) tandis que `let` ne l'est pas (Si on déclare une variable let, elle existe dans le bloc dans lequel elle est déclarée mais pas avant.)

8. _.bind(this)_ est une méthode utilisée pour fixer la valeur de `this` dans une fonction. Si on la supprime, `this` pourrait faire référence à autre chose que ce qui est attendu et engendrer des erreurs dans ce qu'on attend du code. L'arrow function permet de ne pas utiliser _.bind(this)_ car les arrow functions lient automatiquement `this` au contexte environnant.

9. `@` dans `@babel/***` est utilisé pour marquer les annotations et les métadonnées dans les commentaires de code, il indique des configurations spécifiques ou des plugins à utiliser avec Babel.

10. Les avantages des **Promesses** sont une meilleure gestion des erreurs avec `catch()`, la possibilité de chaîner des opérations asynchrones de manière plus lisible avec `then()`, et la facilité de traitement des opérations asynchrones avec `async/await`.

11. La version de l'ES async/await a été publiée dans l'ES8 (2017).

12. La programmation orientée component pour le web est plus maintenable car elle permet la réutilisation du code et des components.

13. La programmation fonctionnelle est un style de programmation où le code est structuré autour de fonctions. Ces fonctions sont traitées comme des éléments de premier ordre, c’est à dire qu'elles peuvent être passées en tant qu'arguments à d'autres fonctions, retournées en tant que résultats à partir de fonctions et stockées dans des structures de données. Deux concepts importants de la programmation fonctionnelle sont les fonctions pures et l’immuabilité des données. Une fonction pure est une fonction qui produit toujours le même résultat pour les mêmes entrées et n'a pas d'effets secondaires, ce qui signifie qu'elles ne modifient pas l'état en dehors de la fonction elle-même. L’immutabilité des données est le fait que les données ne changent pas une fois qu'elles sont créées. Au lieu de modifier les données existantes, de nouvelles données sont créées par des transformations.

14. La fonction map() en JavaScript est utilisée pour appliquer une fonction donnée à chaque élément d'une liste (ou d'une autre structure de données comme un array) et renvoyer une nouvelle liste contenant les résultats de l'application de cette fonction à chaque élément. Cette fonction ne modifie pas le tableau original sur lequel elle est appelée. Au lieu de cela, elle crée un nouveau tableau contenant les résultats de l'application de la fonction.
    Voici la syntaxe a utilisé :
    const newarray = array.map(function(item) => {
    return fonction_appliquer ;
    })

15. La fonction filter() en JavaScript est utilisée pour filtrer les éléments d'un tableau en fonction d'une condition donnée et renvoyer un nouveau tableau contenant uniquement les éléments qui satisfont cette condition. Le nouveau tableau peut avoir une taille inférieure ou égale à celle du tableau d'origine, selon le nombre d'éléments qui satisfont la condition de filtrage.
    Voici la syntaxe a utilisé :
    var newArray = array.filter(function(item) {
    return condition;
    });

16. La fonction reduce() en programmation est utilisée pour réduire les éléments d'un tableau à une seule valeur en appliquant une fonction de rappel sur chaque élément du tableau. Cette fonction de rappel prend en général deux arguments : un accumulateur (ou valeur courante) et l'élément en cours de traitement. Elle peut être utilisée pour diverses tâches telles que la sommation des valeurs, l'aplatissement des tableaux ou la génération de nouvelles structures de données.
    Voici la syntaxe a utilisé :
    array.reduce(callback[, valeurInitiale])

17. .then() utilise une syntaxe de style callback pour gérer les promesses, tandis que async/await est une syntaxe plus concise et lisible qui rend le code asynchrone plus semblable à celui synchrone en utilisant les motsclés async et await. Avec .then(), les callbacks sont enchaînés (aussi appelées callback hell), tandis qu'avec async/await, les opérations asynchrones sont gérées de manière linéaire, avec la possibilité d'utiliser try/catch pour la gestion des erreurs. On comprend vite que async/await offre une approche plus propre et plus expressive pour gérer les opérations asynchrones que .then().

18. Dans un premier temps, un fichier SASS est un fichier contenant du code écrit dans le langage Sass (Syntactically Awesome Style Sheets), un préprocesseur CSS.
    Le préfixe « _ » dans un nom de fichier SASS indique généralement qu'il s'agit d'un fichier partiel. Les fichiers partiels en Sass sont des fichiers qui contiennent généralement des morceaux de code réutilisables, tels que des variables ou des fonctions. Ils ne sont pas censés compilés individuellement en CSS, mais sont inclus dans d'autres fichiers Sass à l'aide de la directive @import. Le préfixe « _ » est une convention pour indiquer que le fichier est un fichier partiel et ne doit pas être compilé directement en CSS.