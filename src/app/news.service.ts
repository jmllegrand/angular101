/**
 * Created by jmlegrand on 08/04/17.
 */

export class NewsService {
  getNews = () => {
    return [
      {
        title: "Sarkozy et Juppé apportent leur soutien à Fillon",
        imageUrl: "http://s2.lemde.fr/image2x/2017/04/08/534x0/5108043_7_533b_alain-juppe-nicolas-sarkozy-et-francois_33a71479e0f7c4389c63b3afef4d047a.jpg",
        released: "08-04-2017",
        rating: "4",
        description: `
      Dans sa campagne agitée comme des montagnes russes, où les descentes ont été plus nombreuses et violente que les montées, 
      les jours se suivent et ne se ressemblent pas pour François Fillon. Jeudi soir, le candidat de la droite à la présidentielle 
      s’est fait enfariner lors de son meeting à Strasbourg. Vendredi 7 avril, entre des sondages plus optimistes et des signes 
      d’affection rares, il a connu une journée printanière. Une des premières depuis longtemps.`,
        viewed: 45000
      },
      {
        title: "Bruno Le Maire annonce qu’il votera pour François Fillon à l’élection présidentielle",
        imageUrl: "http://s2.lemde.fr/image2x/2017/04/08/534x0/5108188_6_6993_bruno-le-maire-le-26-septembre-2016_138a3be253aee4567af1c53088c4e5ad.jpg",
        released: "08-04-2017",
        rating: "3",
        description: `
      Bruno Le Maire, qui avait démissionné de l’équipe de campagne de François Fillon, a déclaré samedi dans la presse qu’il voterait pour 
      le candidat de la droite, par respect de l’engagement pris durant la primaire de soutenir le vainqueur.
      L’ancien ministre, qui conseillait M. Fillon sur les questions internationales, avait démissionné le 1er mars de l’équipe de campagne 
      pour protester contre le fait que le député de Paris ne respectait pas sa promesse de renoncer à être candidat s’il était mis en examen.`,
        viewed: 35000
      }

      /*myObject =  {
       productName: "Fillon, elu président",
       imageUrl: "http://s1.lprs1.fr/images/2017/04/07/6832545_1-0-1270987504_1000x625.jpg",
       releasedName: "10-05-2017",
       rating: "4"
       };*/
    ]
  }
}