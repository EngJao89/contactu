export const ContactsService = {
  listar() {
      return fetch('http://localhost:3200/wscontatos')
          .then(response => response.json());
  }
}