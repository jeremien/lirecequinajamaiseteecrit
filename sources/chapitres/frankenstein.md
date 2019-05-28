# FrankensteinNative

**Maëva Borg**

Comment penser la Collection Numérique ?
Comment re-penser un classique aujourd'hui ? 
Quelle est la place du language dans le mythe de Frankenstein ?
Quelle serait l'histoire racontée par la créature de Frankenstein ? 
 
*FrankensteinNative* est l'AntiLivre/AlterEgo de l'édition réalisée pour *La Collection* sur la Science-Fiction. *L'antilivre*, terme emprunté à l'éditeur suisse *Abrüpt*, pense le livre comme un PDF Do It Yourself. C'est-à-dire que le lecteur a le choix ou non de lire le texte dans son format Numérique, mais le fichier est également pensé pour être imprimé, puis relié. 

Dans des critiques littéraires, la créature est considérée comme détentrice de la science divine. Victor Frankenstein est lui, le *créateur de l’humanité*, le Prométhée moderne. Dans le mythe de Prométhée, l’homme crée par Prométhée meurt, malgré ses paramètres encore trop faible pour se défendre correctement face aux autres créatures terrestres.

Dans le cas du roman de Mary Shelley, le schéma est agrémenté : Lorsque la créature est rejetée par l’Homme, elle se retourne contre son maître. 
Avant cela, elle souhaite s'intégrer dans le Monde Humain. Elle en vient à observer une famille où l'éducation d'une étrangère et la découverte des livres lui permettent d'apprendre à parler et à lire.

Cette partie m'intéressait car il y a un lien particulier au langage : La créature ne reçoit pas d'éducation donc n'a donc pas accès au langage. Il réagit de manière primitive et a donc un langage dit natif (langage de programmation) ou Primitif (langage parlé). Et pour s'intégrer, elle tente de parler le langage soutenu, parlé par les autres personnages, d'une classe sociale plus haute, afin de pouvoir être à la hauteur de son créateur. 

#### Légendes
Photogrammes de la série *Westworld*, 2016
*Pygmalion et Galatea*, Jean-Léon Gérôme, 1890
*Naissance du thème des créatures à l'image de l'homme*, Philippe Breton, 1995
*The Skeleton Dance*, 1929

#### image

![full](http://localhost:3000/images/frankenstein/bernard-full.jpg)

<!-- #### image

![full](http://localhost:3000/images/frankenstein/victor-full.jpg) -->

#### image

![full](http://localhost:3000/images/frankenstein/Pygmalion_and_Galatea-full.jpg)

#### image

![full](http://localhost:3000/images/frankenstein/chronologie.jpg)

#### image

![full](http://localhost:3000/images/frankenstein/DanseMacabreSkeletonCats-full.jpg)

#### L'intelligence des créatures-machines 

On peut supposer aujourd'hui que dans le cas de l'Intelligence Artificielle soumise au Machine Learning (ou "Apprentissage Machine"), peut être une transposition de la créature. L'Intelligence Artificielle peut en effet apprendre à parler, ou s'entraîner à le faire, avec des paramètres qu'on lui impose. 
On lui donne un texte-modèle, et l'intelligence Artificielle passe en revue les mêmes données de manières différentes. On voit alors l'évolution de son entraînements, ses essais de rédaction au plus proche possible de ce texte.
Pour chaque étapes, il y a une perte indiquée : plus c'est la perte est réduite, plus L'IA est proche du texte de validation.

La concrétisation de cette idée est principalement due à Alan Turing et à son concept de la *machine universelle* en 1932, qui est à la base des ordinateurs d'aujourd'hui. Il continuera à poser les bases de l'apprentissage automatique, avec son article sur *L'ordinateur et l'intelligence* en 1953, dans lequel il développe, entre autres, le test de Turing.

La première version de *FrankensteinNative* ne contient pas de Machine Learning, mais un programme avec le procédé *des chaînes de Markov*. Les deux processus parlent en effet de statistiques, mais celui de Markov fonctionne surtout par probabilités.

Les chaînes de Markov portent le nom de leur inventeur, Andreï Markov.(1906)
« L'information utile pour la prédiction du futur est entièrement contenue dans l'état présent du processus et n'est pas dépendante des états antérieurs (le système n'a pas de *mémoire*) ». Les processus de Markov sont liés au mouvement brownien et à l'hypothèse ergodique, deux sujets de physique statistique qui ont été très importants au début du xxe siècle.

Dans le cas du texte littéraire, La chaine de Markov va prendre deux éléments, ici deux parties d'un même chapitre. Le processus est donc *conscient* du nombre de caractères qu'on lui donne, les analyse, puis mélange de manière aléatoire des éléments des deux textes, par probabilité.
Imaginons que les lettres de *Monster* apparaîssent 20 fois dans le même chapitre, il aura donc plus de chance que ces lettres apparaissent dans le nouveau texte, généré par le processus. 

Un programme informatique en code natif (ou langage machine) est composé d'instructions directement reconnues par un processeur.
De ce fait, ce résultat généré serait une proposition de ce que serait l'histoire racontée par la créature, et non pas par les humains.
AntiLivre, Poésie Concrête et Machine Learning sont alors liés.

#### Références

- *Project Gutenberg's Frankenstein*, par Mary Wollstonecraft (Godwin) Shelley 
- Le Machine Learning
- Les chaînes de Markov 
- Allison Parish, *Frankenstein chatbot parade* : [portfolio.decontextualize.com](http://portfolio.decontextualize.com/)
- Collectif Algolittéraire : [www.algolit.net](http://www.algolit.net/)
- Frankenstein ou, le Prométhée moderne, de Mary Shelley. 
- *Westworld*, série HBO crée par Jonathan Nolan et Lisa Joy. 
- Les éditions *Abrüpt* , [abrupt.ch/antilivre](https://abrupt.ch/antilivre/)
- *Objet papier*, [objetpapier.fr](https://objetpapier.fr/)

#### Diagramme de flux 

Présentation de la logique du dispositif


#### image

![full](http://localhost:3000/images/frankenstein/flowchart.svg)

#### Dispositif

Quelques extraits des sources du dispositif

#### Sources

MarkovChain with value 4 :

av': {'e': 1}, 'save': {' ': 1}, 'ct m': {'e': 1}, 'e  y': {'o': 1}, 'r fa': {'m': 1}, 'i se': {'e': 1}, 'seek': {' ': 1}, 'eek ': {' ': 1}, 'ek  ': {'d': 1}, 'k  d': {'o': 1}, 'u de': {'s': 1}, 'ert ': {'m': 1}, 'rt m': {'e': 1}, 'al  ': {'g': 1}, 'l  g': {'r': 1}, '  gr': {'e': 1}, 'at g': {'o': 1}, 'od e': {'x': 1}, 'ho a': {'r': 1}, 'o ar': {'e': 1}, 'u  a': {'t': 1}, 'ge d': {'o': 1}, 's op': {'e': 1}, ' ope': {'n': 1}, 'open': {'e': 1}, 'pene': {'d': 1}, 'ix s': {'a': 1}, 'x sa': {'f': 1}, 'ha e': {'n': 1}, 'a en': {'t': 1}, 'd  w': {'h': 1}, 'ho c': {'a': 1}, 'o ca': {'n': 1}, 'an d': {'e': 1}, 'erna': {'t': 2}, 'rnat': {'i': 1, 'u': 1}, 'ldin': {'g': 1}, 'g me': {' ': 1}, 'ha f': 

MarkovChain with value 8 :

'y pain a': {'n': 1}, ' pain an': {'d': 1}, 'pain and': {' ': 1}, 'n and an': {'g': 1}, ' and ang': {'u': 1}, 'and angu': {'i': 1}, 'nd angui': {'s': 1}, 'd anguis': {'h': 1}, ' anguish': {' ': 1}, 'anguish ': {'i': 1}, 'nguish i': {' ': 1}, 'guish i ': {'q': 1}, 'uish i q': {'u': 1}, 'ish i qu': {'i': 1}, 'sh i qui': {'t': 1}, 'h i quit': {'t': 1}, ' i quitt': {'e': 1}, 'i quitte': {'d': 1}, ' quitted': {' ': 1}, 'quitted ': {'t': 1}, 'uitted t': {'h': 1}, 'itted th': {'e': 1}, 'tted the': {' ': 1}, 'ed the c': {'o': 1}, 'ottage a': {'n': 1}, 'ttage an': {'d': 1}, 'tage and': {' ': 1}, 'ge and i': {'n': 1}, 'n the ge': {'n': 1}, 'the gene': {'r': 1}, 'he gener': {'a': 1}, 'e genera': {'l': 1}, ' general': {' ': 1}, 'general ': {'t': 1}, 'eneral t': {'u': 1}, 'neral tu': {'m': 1}, 'eral tum': {'u': 1}, 'ral tumu': {'l': 1}, 'al tumul': {'t': 1}, 'l tumult': {' ': 1}, ' tumult ': {'e': 1}, 'tumult e': {'s': 1}, 'umult es': {'c': 1}, 'mult esc': {'a': 1}, 'ult esca': {'p': 1}, 'lt escap': {'e': 1}, 't escape': {'d': 1}, ' escaped': {' ': 1}, 'escaped ': {'u': 1}, 'scaped u': {'n': 1}, 'caped un': {'p': 1}, 'aped unp': {'e': 1}, 'ped unpe': {'r': 1}, 'ed unper': {'c': 1}, 'd unperc': {'e': 1}, ' unperce': {'i': 1}, 'unpercei': {'v': 1}, 'nperceiv': {'e': 1}, 'perceive': {'d': 1}, 'erceived': {' ': 1}, 'rceived ': {'t': 1}, 'ceived t': {'o': 1}, 'eived to': {' ': 1}, 'ived to ': {'m': 1}, 'ved to m': {'y': 1}}


#### Résultats

Un exemple de textes générés par le programme

#### Textes générés

ith a sudden i look
mystem of a the sainted watchings
in generosity inquiries of multifarious
agrippa albertus magnific and the tream of heaven years
my life but which cornelius and entered t...

by that length
it woman picture
lost reflection months
beaufort with sustened for he sweetness
they had filled his circumstance
have innocent to procure
so expresence formerly beauforthiness
when my mother means
considerable stores

took a could have
his station equals
you have
your to devoted glanced for
i will pioneer and if
my into his on i
fellow proves to quit...

immortalities instructing escape
reality which still duties were placed oncerning to his various
improve your wish inted to leavens

night i saw the felt of infusin
i grasped harm he demoniacal
continued wherefore

wept overtaken in a grees
now the assurance quickly
and the destine poor girl is on receive
the with and sorror several circumstantiality
in a weightest i had been forget

voyage at five felt sympathy loss
that i progression hers grasp
how done toward stood foresaw
observe that lausand i had lettered
allings alas is to who would
suddenly i could
have beauty the murdered to cross

hey no longered by
moment to reflect their energies
are the sickening terribly appalling
in our mind yet be than my be my despair
he reminds me
with cheerful auguries ...

and i am every mountains of man
the speaks the rouse...

consented her she was that the
everish cheerful scene side
the luxury the transported wishes
as if possession or me from its we
have be as also should that i would not




