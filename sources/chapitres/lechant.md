# Le chant des données

**Nicolas Mars**

À l’ère de l’hégémonie du *digital*, de nouveaux enjeux de pouvoir apparaissent. En effet, alors que les gouvernements prennent seulement conscience de l’importance de légiférer sur l’usage de la donnée numérique, ils sont déjà devancés de plusieurs décennies par certaines sociétés privées. Ces dernières ont su développer, parallèlement à des moyens de stockage appropriés, des systèmes de lecture pour traiter des masses de données en constant accroissement, le big data.

L’ordinateur, média composite par excellence, peut relayer des données issues de tous types de média discrétisé, de comportement; provenant de toutes sortes d’individu ou de groupe via internet.
Il est universellement utilisé, et en Europe, 80% de la population pénètre régulièrement internet [blogdumoderateur.com](www.blogdumoderateur.com).
Le comportement de l’internaute peut ainsi devenir objet d’analyse, puis sujet d’influence.

Les publicités ciblées, l’adaptation du discours politique à un échantillon donné (cf. Cambridge Analytica),l’adaptation d’une création audiovisuel à son audience (scénario de série Netflix), compte parmi tant d’autres exemples de l’impact du big data sur nos vies, de ce que
le numérique peut avoir de persuasif et d’ubiquitaire.

Si ces systèmes de lecture sont mis en place à des fins d’influence, ils sont généralement cachés au public ou rendus difficilement accessibles, par exemple en plaçant les conditions et termes d’utilisation dans une succession rapide d’étapes d’installation.
L‘internaute n’a pas forcément conscience d’être surveillé, puis manipulé par ce qu’il peut voir et faire à l’écran.

Pour mon projet, il m’a semblé intéressant de mettre en place un programme permettant à l’utilisateur de manipuler ces données, à des fins ludiques, consistant en un système de lecture musical. On sera invité à récupérer des données provenant de comportements d’utilisateurs, des messages sur des réseaux, pour les faire lire (de manière audible) par le programme, via un moteur de synthèse vocale. En début de session, on pourra charger une production instrumentale sur laquelle viendra *chanter* le programme, puis grâce à un contrôleur, changer la vitesse d’élocution, la hauteur des notes ou encore jouer des accords.

Ce programme aura comme but, en plus de s’amuser, de rappeler de l’importance de faire attention à ce que l’on fait, poste (et plus) sur internet; car ces données peuvent faire le jeu de quelqu’un d’autre. Grâce à un soin porté sur la jouabilité du programme et des effets sur le son, dirigé vers une IA de synthèse vocale et des modèles de voix issus du deep learning, l’ambition est de créer un nouvel outil de création musicale.

#### Description du fonctionnement technique

Pour le moment, le programme fonctionne avec le moteur de synthèse vocale de l’ordinateur (*Espeak* sous linux), qui produit une voix pour le moins robotique (voir le chapitre *programme à venir*).
Basé sur la technique du web scrapping, il invite à chercher des textes destinés à être lus par le moteur, ainsi qu’une production instrumentale disponible sur *youtube*. 
À l’issue de cette première phase d’initialisation, deux fichiers sont créés, un texte et une piste audio. Cette dernière sera analysée avant d’être jouée, afin d’en extraire le tempo.
Une vitesse de référence (jeu à la noire) est alors calculée pour le moteur de synthèse vocale, alors calibré sur l’instrumental.
Cette vitesse sera ensuite modulable de façon à pouvoir jouer différents rythmes (ronde, croche...), des multiples du rythme de référence.
Une fois cette phase d’initialisation achevée, la lecture de  l'instrumental débute automatiquement. C’est la phase de jeu et l’on contrôle le moteur de synthèse au clavier.

#### Enjeux du programme informatique

### Vers une synthèse naturelle
À terme, le programme sera entrainé avec un logiciel permettant de faire du deep learning (Pytorch, TensorFlow). 
Ainsi, il sera possible de disposer pour le jeu d’un panel de modèles de voix, issues d’un corpus (audio et texte). Il ne restera alors plus qu’à choisir les voix que nous voudrions jouer, que ce soit la nôtre ou bien celle d’une diva, d’un personnage connu.

Le développement de ce domaine (*text to speech*) va bon train, et il existe déjà quelques moteurs de synthèse vocale basés sur des IA. Les résultats sont étonnants de fidélité, et il devient ardu de démêler le vrai du faux.

### Vers une plus grande jouabilité
Le deuxième axe de développement du programme sera sa jouabilité.
Plus de rythmes d’élocution, des effets implémentés au programme (patch construits sous *Pure Data*), la possibilité de réaliser des accords, seront entre autres des améliorations apportées au programme pour le rendre *jouable* comme l’on jouerait d’un autre instrument.
Parallèlement, un contrôleur sera développé, qui permettra d’exploiter au mieux toutes les fonctionnalités du programme.

#### Diagramme de flux 

Présentation de la logique du dispositif

#### image

![full](http://localhost:3000/images/lechant/flowchart.svg)

#### Légendes
hans Richter, *Rhythmus 21*, 1921
Henri Nouveau, *Architecture is frozen music*, 1928
Klaus Schulze, 1977
kurt schwitters, *Ursonate*, 1932
John Cage, *Variations I-III*, 1961
Peter Cnokrak, *Love will tear us appart again*, 2013

#### image

![full](http://localhost:3000/images/lechant/hans-richter.jpg)

#### image

![full](http://localhost:3000/images/lechant/henri-nouveau.jpg)

#### image

![full](http://localhost:3000/images/lechant/klaus-schulze.jpg)

#### image

![full](http://localhost:3000/images/lechant/schwitters.jpg)

#### image

![full](http://localhost:3000/images/lechant/john-cage1.jpg)

#### image

![full](http://localhost:3000/images/lechant/cnokrak.jpg)