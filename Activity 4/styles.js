import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Home Screen
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff8f5',
  },
  homeEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  homeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  homeSubtitle: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#ff7043',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Recipe List
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff8f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#ff7043',
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardInfo: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },

  // Recipe Details
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff8f5',
  },
  detailsName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsMeta: {
    fontSize: 14,
    color: '#ff7043',
    marginTop: 6,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 6,
  },
  bodyText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  backButton: {
    marginTop: 32,
    marginBottom: 40,
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#ff7043',
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});