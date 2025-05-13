var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  This is a paragraph thas has emphasized text. Really. I love pretext. Sine is written . . We note that slark is a hybrid of shark and sloth.   Numbered list of my favorite animals:   Rabbit    Fox     Unordered list of favorite animals:   Rabbit    Elephant      Some Colors    Red  Green  Yellow    Blue  White  Pink       The term is now defined.      Easy lemma.      Statement of theorem.     By Lemma , we know the theorem is true.      First task    Hint for first task.      Second task. Make new edits for testing commit.     "
},
{
  "id": "sec-section-name-2",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slark "
},
{
  "id": "sec-section-name-5",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-5",
  "type": "Table",
  "number": "1.1.1",
  "title": "Some Colors",
  "body": " Some Colors    Red  Green  Yellow    Blue  White  Pink    "
},
{
  "id": "axiom-exampleaxiom",
  "level": "2",
  "url": "sec-section-name.html#axiom-exampleaxiom",
  "type": "Axiom",
  "number": "1.1.2",
  "title": "",
  "body": "  The term is now defined.   "
},
{
  "id": "lem-newlemma",
  "level": "2",
  "url": "sec-section-name.html#lem-newlemma",
  "type": "Lemma",
  "number": "1.1.3",
  "title": "",
  "body": "  Easy lemma.   "
},
{
  "id": "thm-exthm",
  "level": "2",
  "url": "sec-section-name.html#thm-exthm",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "",
  "body": "  Statement of theorem.   "
},
{
  "id": "sec-section-name-9",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-9",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " By Lemma , we know the theorem is true.  "
},
{
  "id": "sec-section-name-10",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-10",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "   First task    Hint for first task.      Second task. Make new edits for testing commit.    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
