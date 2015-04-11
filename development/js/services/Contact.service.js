(function () {
	'use strict';

	function ContactService() {

		// fake data
		var contacts = [{
			'avatar': 'data:image/jpeg;base64,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',
			'birth': '1945. 09. 02.',
			'city': 'Port Isabellafurt, AK 45554',
			'country': 'United States of America',
			'email': 'Nils.Stoltenberg@gmail.com',
			'name': 'Nils Stoltenberg',
			'phone': '904.633.7068 x07896',
			'position': 'web designer',
			'street': '7741 Wilderman Plains'
		}, {
			'avatar': 'data:image/jpeg;base64,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',
			'birth': '1984. 08. 22.',
			'city': 'Noramouth, NC 34277-5650',
			'country': 'United States of America',
			'email': 'Eduardo.Fay@gmail.com',
			'name': 'Eduardo Fay V',
			'phone': '1-900-166-7393',
			'position': 'Front-end developer',
			'street': '125 Tyler Parks'
		}, {
			'avatar': 'data:image/jpeg;base64,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',
			'birth': '1950. 09. 01.',
			'city': 'New Casimirfurt, GA 76229',
			'country': 'United States of America',
			'email': 'Claire.Fay@yahoo.com',
			'name': 'Claire Fay',
			'phone': '(909) 416-5586 x03144',
			'position': 'photographer',
			'street': '548 Gottlieb Ville'
		}];

		return {
			addContact: function (contact) {
				if (contact.avatar === undefined) {
					contact.avatar = 'data:image/png;base64,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';
				}
				contacts.push(contact);
			},
			getContacts: function () {

				// add the original index into every obj
				for (var i = 0, len = contacts.length; i < len; i++) {
					contacts[i].originalIndex = i;
				}

				return contacts;
			},
			getContactsByIndex: function (index) {
				return contacts[index];
			},
			updateContact: function (index, contact) {
				contacts[index] = contact;
			}
		};
	}

	angular
		.module('cm')
		.service('ContactService', ContactService);
}());
