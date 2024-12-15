import { StyleSheet } from 'react-native';
import colors from '../themes/colors';
import typography from '../themes/typography';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: typography.fontSizes.large,
    fontWeight: typography.fontWeights.bold,
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: typography.fontSizes.medium,
    fontWeight: typography.fontWeights.regular,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  text: {
    fontSize: typography.fontSizes.small,
    fontWeight: typography.fontWeights.regular,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: typography.fontSizes.medium,
    fontWeight: typography.fontWeights.bold,
    color: colors.text,
  },
});

export default globalStyles;
