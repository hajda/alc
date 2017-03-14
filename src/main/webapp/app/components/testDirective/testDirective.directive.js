(function testDirectiveDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcTestDirective', testDirectiveDirective);

    testDirectiveDirective.$inject = [];

    function testDirectiveDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/testDirective/testDirective.template.html',
            controller: 'AlcTestDirectiveController',
            controllerAs: 'ojchidshfiushiguhfsag',
            link: function postLink($scope, elementInstance, attributeInstances, controller) {
                $scope.alcTestSections = {
                    "alcTestSections": {
                        "title": "Test Sections!",
                        "subtitle": "Let's make nice section headers",
                        "sections": [
                            {
                                "sectionTitle": "Niki Lauda",
                                "sectionContent": "Andreas Nikolaus \"Niki\" Lauda (born 22 February 1949) is an Austrian former Formula One driver and a three-time F1 World Drivers' Champion, winning in 1975, 1977 and 1984. He is currently the only driver to have been champion for both Ferrari and McLaren, the sport's two most successful constructors. More recently an aviation entrepreneur, he has founded and run two airlines (Lauda Air and Niki). He is also Bombardier Business Aircraft brand ambassador. He was also a consultant for Scuderia Ferrari and team manager of the Jaguar Formula One racing team for two years. He is currently working as a pundit for German TV during Grand Prix weekends and acts as non-executive chairman of the Mercedes AMG Petronas F1 Team. Lauda owns 10% of the team."
                            },
                            {
                                "sectionTitle": "James Hunt",
                                "sectionContent": "James Simon Wallis Hunt (29 August 1947 – 15 June 1993),[1] a British racing driver, won the Formula One World Championship in 1976. After retiring from racing in 1979, Hunt became a media commentator and businessman. Beginning his racing career in touring car racing, Hunt progressed into Formula Three, where he attracted the attention of the Hesketh Racing team and soon came under their wing. Hunt's often reckless and action-packed exploits on track earned him the nickname \"Hunt the Shunt\" (shunt as a British racing term means \"crash\"). Hunt entered Formula One in 1973, driving a March 731 entered by the Hesketh Racing team. He went on to win for Hesketh, driving their own Hesketh 308 car, in both World Championship and non-Championship races, before joining the McLaren team at the end of 1975. In his first year with McLaren, Hunt won the 1976 World Drivers' Championship, and he remained with the team for a further two years, although with less success, before moving to the Wolf team in early 1979. Following a string of races in which he failed to finish, Hunt retired from driving halfway through the 1979 season. After retiring from motor racing, he established a career commenting on Grands Prix for the BBC. He had a reputation for tactical knowledge, technical insight, a dry sense of humour and criticism of drivers who, he believed, were not trying hard enough, which in the process brought him a whole new fanbase. Hunt died from a heart attack aged 45. He was inducted into the Motor Sport Hall of Fame on 29 January 2014."
                            },
                            {
                                "sectionTitle": "Michael Schumacher",
                                "sectionContent": "Michael Schumacher (German pronunciation: [ˈmɪçaʔɛl ˈʃuːmaxɐ] ( listen); born 3 January 1969) is a German retired racing driver. He is a seven-time Formula One World Champion and is widely regarded as one of the greatest Formula One drivers of all time.[1][2][3][4] He was named Laureus World Sportsman of the Year twice.[5] He won two titles with Benetton in 1994 and 1995 before moving to Ferrari where he drove for eleven years. His time with Ferrari yielded five consecutive titles between 2000 and 2004. Schumacher holds many of Formula One's driver records, including most championships, race victories, fastest laps, pole positions and races won in a single season – 13 in 2004 (the last record was equalled by fellow German Sebastian Vettel nine years later). In 2002, he became the only driver in Formula One history to finish in the top three in every race of a season and then also broke the record for most consecutive podium finishes. According to the official Formula One website, he is \"statistically the greatest driver the sport has ever seen\".[6] After beginning in karting, Schumacher won the German drivers' championships in Formula König and Formula Three before joining Mercedes in the World Sportscar Championship. In 1991, his Mercedes-funded race debut for the Jordan Formula One team resulted in Schumacher being signed by Benetton Formula One team as their driver for the rest of that season. Establishing himself as a top driver, finishing third in 1992 and fourth in 1993, Schumacher became the first German World Drivers' Champion in 1994 by one point over Damon Hill. In 1995 he repeated the success, this time with a greater margin. Schumacher moved to Ferrari in 1996. Schumacher came close to winning the 1997 and 1998 titles, before breaking his leg at the 1999 British Grand Prix, ending another title run. Things then came good for Schumacher who won another five consecutive drivers' titles from 2000 to 2004. Schumacher retired from Formula One driving in 2006 staying with Ferrari as an advisor.[7] He came close to an eighth title that year, but due to technical problems in the final two races he fell short to Fernando Alonso. Schumacher agreed to return for Ferrari part-way through 2009, as cover for the badly injured Felipe Massa, but was prevented by a neck injury. Schumacher returned to Formula One on a permanent basis from 2010 with the Mercedes team before retiring for a second time at the conclusion of the 2012 season.[8] His career was not without controversy, including being twice involved in collisions in the final race of a season that determined the outcome of the World Championship, with Damon Hill in 1994 in Adelaide, and with Jacques Villeneuve in 1997 in Jerez.[9] Off the track, Schumacher is an ambassador for UNESCO and a spokesman for driver safety. He has been involved in numerous humanitarian efforts throughout his life and donated tens of millions of dollars to charity.[10] Schumacher and his younger brother, Ralf, are the only brothers to win races in Formula One, and they were the first brothers to finish 1st and 2nd in the same race, a feat they repeated in four subsequent races. In December 2013, Schumacher suffered a serious head injury while skiing. He was airlifted to a hospital and placed in a medically induced coma, having suffered a traumatic brain injury. He was in the coma for six months from 29 December 2013 until 16 June 2014. He left the hospital in Grenoble for further rehabilitation at the University Hospital (CHUV) in Lausanne.[11] On 9 September 2014, Schumacher was relocated to his home where he continues to receive medical treatment and rehabilitation privately."
                            }
                        ]
                    }
                };
            }
        };
    }
})();
