# le chant des données

À l’ère de l’hégémonie du «digital», de nouveaux enjeux de pouvoir
apparaissent. En effet, alors que les gouvernements prennent
seulement conscience de l’importance de légiférer sur l’usage de la
donnée numérique, ils sont déjà devancés de plusieurs décennies
par certaines sociétés privées. Ces dernières ont su développer,
parallèlement à des moyens de stockage appropriés, des systèmes
de lecture pour traiter des masses de données en constant
accroissement, le big data.

L’ordinateur, média composite par excellence, peut relayer des
données issues de tous types de média discrétisé,de comportement;
provenant de toutes sortes d’individu ou de groupe via internet.
Il est universellement utilisé, et en Europe, 80% de la population
pénètre régulièrement internet (www.blogdumoderateur.com).
Le comportement de l’internaute peut ainsi devenir objet d’analyse,
puis sujet d’influence.

Les publicités ciblées, l’adaptation du discours politique à un
échantillon donné (cf Cambridge Analytica),l’adaptation d’une création
audio-visuel à son audience (scénario de série Netflix), comptent parmi
tant d’autres exemples de l’impact du big data sur nos vies, de ce que
le numérique peut avoir de pervasif et d’ubiquitaire.

Si ces systèmes de lecture sont mis en place à des fins d’influence,
ils sont généralement cachés au public ou rendus difficilement
accessible, comme par exemple en plaçant les conditions et termes
d’utilisation dans une succession rapide d’étapes d‘installation.
L‘internaute n’a pas forcément conscience d’être monitoré, puis
manipulé par ce qu’il peut voir et faire à l’écran.

Pour mon projet, il m’a semblé intéressant de mettre en place
un programme permettant à l’utilisateur de pouvoir manipuler ces
données, à des fins ludiques, consistant en un système de lecture
musical. On sera invité à récupérer des données
provenant de comportements d’utilisateurs, des messages sur des
réseaux, pour les faire lire (de manière audible) par le
programme, grâce à un moteur de synthèse vocale. En début de se-
ssion, il pourra charger une production instrumentale sur laquelle
viendra «chanter» le programme, puis grâce à un contrôleur,
changer la vitesse d’élocution, la hauteur des notes ou encore jouer
des accords.

Ce programme aura comme but, en plus de s’amuser, de
rappeler de l’importance de faire attention à ce que l’on fait,
poste (etc...) sur internet; car ces données peuvent faire le jeu de
quelqu’un d’autre. Grâce à un soin porté sur la jouabilité du
programme et des effets sur le son, dirigé vers une IA de
synthèse vocale et des modèles de voix issus du deep learning,
l’ambition est de créer un nouvel outil de création musical.

## descriptif

Pour le moment, le programme fonctionne avec le moteur de
synthèse vocale de l’ordinateur (Espeak sous linux), qui produit
une voix pour le moins robotique (voire «programme à venir»).
Basé sur le web_scrapping, il invite à chercher des textes
destinnés à être lus par le moteur, ainsi qu’une production
instrumentale disponnible sur youtube. À l’issue de cette première
phase d’initialisation, deux fichiers sont créés, un texte
et une piste audio. Cette dernière sera analysée avant d’être
lue, afin d’en extraire le tempo.
Une vitesse de référence (jeu à la noire) est alors calculée pour
le moteur de synthèse vocale, alors calibré sur l’instrumentale.
Cette vitesse sera ensuite modulable de façon à pouvoir jouer
différents rythmes (ronde, croche...), des multiple du rythme
de référence.
Une fois cette phase d’initialisation achevée, l’instrumentale
est jouée automatiquement. C’est la phase de jeu et l’on
contrôle le moteur de synthèse au clavier.

## programme

### _vers une synthèse naturelle
A terme, le programme sera entrainé avec une bibliothèque permettant
de faire du deep learning (Pytorch, TensorFlow...). Ainsi, il sera
possible de disposer pour le jeu d’un panel de modèles de voix,
issues d’un corpus (audio et texte). Il ne restera alors plus qu’à
choisir les voix que nousv voudrions jouer, que ce soit la notre ou
bien celle d’une diva, d’un personnage connu...
Le dévelloppement de ce domaine (text to speech) va bon train, et
il existe déjà quelques moteurs de synthèse basés sur des IA. Les
résultats sont étonnants de fidélité, et il devient ardu de demêler le
vrai du faux...

### _vers une plus grande jouabilité
Le deuxième axe de développement du programme sera sa jouabilité.
Plus de rythmes d’élocution, des effets implémentés au programme
(patch construits sous pure-data), la possibilté de réaliser des accords,
seront entre autres des améliorations apportées au programme pour le
rendre «jouable» comme l’on jouerai d’un autre instrument.
Paralellement, un controleur sera développé, qui permettra d’exploiter
au mieux toutes les fonctionnalités du programme.
