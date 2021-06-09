import React from 'react';
import { Text, View, Button, Modal, ScrollView, Image, StyleSheet } from 'react-native';

const Samplemodal = props => {
  return (
  <View style={styles.container}>
    <Modal visible={props.displayModal} animationType='fade'>
    <ScrollView>
      <View style={styles.imgholder}>
        <Image style={styles.img} source={require('../assets/Tom&Jerry.jpg')} />
      </View>
      <View>
        <Text style={styles.text}>
Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry. Many shorts also feature several recurring characters. 
{'\n\n'}
In its original run, Hanna and Barbera produced 114 Tom and Jerry shorts for MGM from 1940 to 1958. During this time, they won seven Academy Awards for Best Animated Short Film, tying for first place with Walt Disney's Silly Symphonies with the most awards in the category. After the MGM cartoon studio closed in 1957, MGM revived the series with Gene Deitch directing an additional 13 Tom and Jerry shorts for Rembrandt Films from 1961 to 1962. Tom and Jerry then became the highest-grossing animated short film series of that time, overtaking Looney Tunes. Chuck Jones then produced another 34 shorts with Sib Tower 12 Productions between 1963 and 1967. Three more shorts were produced, The Mansion Cat in 2001, The Karate Guard in 2005, and A Fundraising Adventure in 2014, making a total of 164 shorts.
{'\n\n'} 
A number of spin-offs have been made, including the television series The Tom and Jerry Show (1975), The Tom and Jerry Comedy Show (1980–1982), Tom & Jerry Kids (1990–1993), Tom and Jerry Tales (2006–2008), and The Tom and Jerry Show (2014–2021). The first feature-length film based on the series, Tom and Jerry: The Movie, was released in 1992, and 13 direct-to-video films have been produced since 2002, with a live-action/animated hybrid film released in 2021. A musical adaptation of the series, titled Tom and Jerry: Purr-Chance to Dream, debuted in Japan in 2019 in advance of Tom and Jerry's 80th anniversary.
{'\n\n'}
The cartoons are known for some of the most violent cartoon gags ever devised in theatrical animation: Tom may use axes, hammers, firearms, firecrackers, explosives, traps and poison to kill Jerry. On the other hand, Jerry's methods of retaliation are far more violent, with frequent success, including slicing Tom in half, decapitating him, shutting his head or fingers in a window or a door, stuffing Tom's tail in a waffle iron or a mangle, kicking him into a refrigerator, getting him electrocuted, pounding him with a mace, club or mallet, letting a tree or electric pole drive him into the ground, sticking matches into his feet and lighting them, tying him to a firework and setting it off, and so on. While Tom and Jerry has often been criticized as excessively violent, there is no blood or gore in any scene.
{'\n\n'}

      </Text>
      </View>
      </ScrollView>
      <View style={styles.btnholder}>
        <Button title="CLOSE" color="" onPress={props.closeModal} />
      </View>      
    </Modal>
  </View>
  );
};
const styles=StyleSheet.create({
  text:{
    textAlign:'justify',
    marginHorizontal: 24,
    fontSize: 20,
    fontFamily: 'Times New Roman'
  },
  img:{
    borderRadius: 1,
    width: 300,
    height: 250,
  },
  imgholder:{
    marginTop:1,
    justifyContent: 'center',
    alignItems: 'center',  
  
  },
  btnholder:{
    marginVertical: 5,
    alignItems:'center'
  }
});

export default Samplemodal;