import { addCard, ADD_CARD, editCard, EDIT_CARD } from "./cards.actions"

 describe('cards action', () => {
    describe('addCard', () => {
      it('should return action with type ADD_CARD', () => {
        const action = addCard('');

        expect(action.type).toEqual(ADD_CARD);
      })

      it('should return action.payload with text', () => {
        const text = 'some text';

        const action = addCard(text);

        expect(action.payload).toEqual(text);
      })
    })

    describe('editCard', () => {
      it('should return action with type EDIT_CARD', () => {
        const action = editCard(1, '');

        expect(action.type).toEqual(EDIT_CARD);
      })

      it('should return action.payload with index', () => {
        const index = 1;
        const text = 'some text';

        const action = editCard(index, text);

        expect(action.payload.index).toEqual(index)
      })

      it('should return action.payload with text', () => {
        const index = 1;
        const text = 'some text';

        const action = editCard(index, text);

        expect(action.payload.text).toEqual(text)
      })
    })
 })