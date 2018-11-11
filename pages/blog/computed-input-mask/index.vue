<template>
  <div>
    <p>
      An input mask is a way of displaying the value of an <pre><input></pre> element with some formatting. For example, if a user enters their phone number, it will show in the (555)&nbsp;555-5555 format, with backets, a space and a dash for legibility. The value is stripped of the formatting and only the digits are saved.
    </p>
    <pre>Value of phone is {{ phone }}</pre>
    <label for="phone-input">Phone</label>
    <input 
      id="phone-input" 
      v-model="maskedPhone" 
      type="tel" 
      name="phone">
  </div>
</template>

<script>
export default {
  name: 'InputMask',
  // wrapping an object literal in parens is shorthand for returning it
  data: () => ({
    phone: '5555555555'
  }),
  computed: {
    // computed properties with a getter and a setter are passed in as an object
    maskedPhone: {
      // our logic for changing the value
      set(value) {
        // let's remove everything but digits and save it as phone
        this.phone = value.replace(/\D/g, '');
      },
      // our logic for reading the value
      get() {
        // let's make sure the input is a string
        const phone = String(this.phone);

        // if the field is empty, phone is just an empty string
        if (phone.length === 0) {
          return '';
        } else {
          // let's break up the phone into an array of characters:
          // ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
          let formatted = phone.split('');
          // when we have at least one digit
          if (formatted.length > 0) {
            // at index 0 let's remove 0 elements and insert a '('
            formatted.splice(0, 0, '(');
          }
          // when we have at least three digits
          if (formatted.length > 4) {
            // at index 4 (three digits plus opening bracket)
            // let's remove 0 elements and insert a ')'
            formatted.splice(4, 0, ') ');
          }
          // when we have at least three digits
          if (formatted.length > 8) {
            // at index 8 (six digits plus brackets)
            // let's remove 0 elements and insert a '-'
            formatted.splice(8, 0, '-');
          }
          // after ten digits
          if (formatted.length > 13) {
            // let's add one more dash
            formatted.splice(13, 0, '-');
          }
          // let's smoosh the array back into a string and return it
          return formatted.join('');
        }
      }
    }
  }
};
</script>
