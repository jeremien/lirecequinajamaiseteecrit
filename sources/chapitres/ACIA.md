#  ACIA

**Lucas Balandraux**
**Valentin Aubert**

## Contexte

Qu’est-ce-que l’identité ? 
Dans notre société contemporaine, il existe aujourd’hui d’innombrable moyens de fausser l’identité d’une personne, ou pire encore, d’en créer une de toute pièce.
L’utilisation excessive des réseaux sociaux tels que Facebook, Twitter ou encore différents forums ont rendu facile et anodin tous types d’échanges entre n’importe quelle personne. 
Mais comment être sûr que la personne avec qui l’on communique est bien celle que l’on souhaite, ou bien qu’elle existe réellement, en dehors de son identité numérique ?
Au travers de cette installation, nous nous sommes posé la question de l’identité, ce qu’elle engendre, et quels sont ses dérives possibles à l’ère du numérique et de l’hyper-connexion.
Le but de ce projet est de générer en continu une infinité d’identité numérique à l’aide de la génération procédurale. 

Pour ce faire, l’utilisation de deux Intelligences Artificielles (IA) est requise : une première *Créatrice*, qui va façonner un visage, statistiquement unique et n’ayant jamais existé, la seconde, le *Juge*, observe et analyse la création de la première pour en retirer un *compte-rendu*.

Ces capacités de réflexions proches de l’humain qu’on retrouve chez ces IA découlent de leur éducation : l’apprentissage profond.

## Termes techniques

### IA

L’ IA, consiste à mettre en œuvre un certain nombre de techniques visant à permettre aux machines d’imiter une forme d’intelligence réelle. 
La vision artificielle, celle de la machine, permet de déterminer précisément le contenu d’une image pour ensuite la classer automatiquement selon l’objet, la couleur, ou le visage identifié.

### Deep Learning

Le *Deep Learning* ou apprentissage profond est un type d’intelligence artificielle dérivé du machine learning où la machine est capable d’apprendre par elle-même. 
Le Deep-Learning s’appuie sur un réseau de neurones artificiels, s’inspirant du cerveau humain. 
Ce réseau est composé de dizaines voire de centaines de « couches » de neurones, chacune recevant et interprétant les informations de la couche précédente. 
À chaque étape, les *mauvaises* réponses sont éliminées et renvoyées vers les niveaux en amont pour ajuster le modèle mathématique. Au fur et à mesure, le programme réorganise les informations en blocs plus complexes : il *apprend*.

## Récolte de données

### This person does not exist


La première Intelligence Artificielle se trouve sur le site *thispersondoesnotexist.com*.
Ici, cette intelligence permet la création de visages de personnes de différentes personnes n’existant aucunement dans la réalité, de plus cette IA apprend en continu et génère ainsi des visages de plus en plus réalistes. 
Elle a été mise au point par Tero Karras, chercheur principal chez NVIDIA Research, qu’il a rejoint en 2009. 
Sa recherche actuelle évolue autour de l’apprentissage profond, des modèles génératifs et de la création de contenu numérique. 

### Betaface

Dans un second temps, nous utilisons *Betaface*, une autre IA de reconnaissance faciale : ce système est une application logistique visant à automatiser la reconnaissance et l’analyse d’un visage. 
Il est généralement utilisé à des fins de sécurité pour déverrouiller des ordinateurs, mobiles et consoles, ou alors, pour contrôler des populations comme on a récemment pu le voir en Chine. 
Créé par Oleksandr Kazakov, architecte logiciel expérimenté, entrepreneur, et fondateur d’une start-up de haute technologie, *Betaface* s’appuie sur différents éléments, tels que la forme du visage et ses attributs comme l’écartement des yeux et de la bouche, le nez, la pilosité. 
 
Dans notre projet, nous utilisons la reconnaissance 2D, considérée comme la méthode *classique* de reconnaissance faciale, qui consiste à reconnaitre une personne à partir d’une photo. 
Nous l’utilisons afin d’extraire trois de ses données, l’âge, le genre, et les origines ethniques.

#### Diagramme de flux 

Présentation de la logique du dispositif

#### image

![full](http://localhost:3000/images/ACIA/flowchart.svg)

#### Dispositif

Quelques images du dispositif in-situ

#### image
![full](http://localhost:3000/images/ACIA/fknm-full.jpg)


#### image
![full](http://localhost:3000/images/ACIA/1028-full.jpg)

#### image
![full](http://localhost:3000/images/ACIA/jkze-full.jpg)

#### Résultats

Les cartes d’identité générées par le programme

#### image

![full](http://localhost:3000/images/ACIA/7-page-001-1-full.jpg)

#### image

![full](http://localhost:3000/images/ACIA/8-page-001-full.jpg)

#### image

![full](http://localhost:3000/images/ACIA/9-page-001-full.jpg)


