import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ActivityCard from '../components/ActivityCard';

describe('ActivityCard Component', () => {
  const event = {
    nom_evenement: 'Football Match',
    date_evenement: '2024-06-10',
    nom_equipe: 'Les Champions',
    status: 'En cours',
  };

  it('affiche les bonnes informations', () => {
    const { getByText } = render(<ActivityCard event={event} />);
    expect(getByText('Football Match')).toBeTruthy();
    expect(getByText('Les Champions')).toBeTruthy();
    expect(getByText('Créée le 2024-06-10')).toBeTruthy();
  });

  it('affiche le bon bouton selon le statut', () => {
    const { getByText, rerender } = render(<ActivityCard event={event} />);
    expect(getByText('Voir l\'activité')).toBeTruthy();

    // Teste pour une invitation
    event.status = 'Invitation en attente';
    rerender(<ActivityCard event={event} />);
    expect(getByText('Répondre à l\'invitation')).toBeTruthy();
  });

  it('navigue correctement vers l\'écran de détail', () => {
    const mockNavigation = jest.fn();
    const { getByText } = render(<ActivityCard event={event} navigation={{ push: mockNavigation }} />);

    fireEvent.press(getByText('Voir l\'activité'));
    expect(mockNavigation).toHaveBeenCalledWith('/invitation', { params: { event } });
  });
});
