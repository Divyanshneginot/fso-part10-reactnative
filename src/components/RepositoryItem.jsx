import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

const Styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#586069',
    marginBottom: 5,
  },
  languageContainer: {
    backgroundColor: '#0366d6',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
  },
  language: {
    color: 'white',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  }
});

const parseThousands = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
};

const RepositoryItem = ({ repository, showGitHubButton }) => {
  return (
    <View style={Styles.container} testID="repositoryItem">
      <View style={Styles.topSection}>
        <Image source={{ uri: repository.ownerAvatarUrl }} style={Styles.avatar} />
        
        <View style={Styles.infoContainer}>
          <Text style={Styles.fullName}>{repository.fullName}</Text>
          <Text style={Styles.description}>{repository.description}</Text>
          <View style={Styles.languageContainer}>
             <Text style={Styles.language}>{repository.language}</Text>
          </View>
        </View>
      </View>

      <View style={Styles.statsRow}>
        <View style={Styles.statItem}>
          <Text style={{ fontWeight: 'bold' }}>{parseThousands(repository.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={Styles.statItem}>
          <Text style={{ fontWeight: 'bold' }}>{parseThousands(repository.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={Styles.statItem}>
          <Text style={{ fontWeight: 'bold' }}>{parseThousands(repository.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={Styles.statItem}>
          <Text style={{ fontWeight: 'bold' }}>{parseThousands(repository.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
      {showGitHubButton && (
        <Pressable
          style={{
            backgroundColor: '#0366d6',
            padding: 15,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 15,
          }}
          onPress={() => Linking.openURL(repository.url)}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Open in GitHub</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;