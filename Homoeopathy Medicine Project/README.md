# Root & Remedy — local shop demo

A responsive customer-facing homoeopathy shop frontend made with plain HTML, CSS, and JavaScript. It includes a sample product catalogue, search and filters, product details, local demo accounts, cart, wishlist, and a complete simulated doctor appointment workflow.

## Run it on Windows

1. Install [Visual Studio Code](https://code.visualstudio.com/) if it is not already installed.
2. Open this project folder in VS Code.
3. If you have the **Live Server** extension installed, right-click `index.html` and choose **Open with Live Server**. Your browser will open the local site.
4. Alternatively, open PowerShell in this folder and run:

   ```powershell
   py -m http.server 8000
   ```

   Keep that window open, then visit [http://localhost:8000](http://localhost:8000) in your browser. Press `Ctrl+C` in PowerShell to stop the server.

No npm install, build step, or API key is needed. Internet access is only used for optional Google Fonts; the shop functionality itself is local.

## Try the demo

- Browse products, search by product name/brand/category/type, and combine category, price, brand, availability, and rating filters.
- Open a product's details, add it to your cart or wishlist, change cart quantities, or move saved products to the cart by adding them from the wishlist.
- Create an account with any email address and a password of at least eight characters. You can then sign out and sign back in using the same details.
- Email/mobile verification is a UI simulation only. Forgot password lets you set a replacement password locally; it does not send an email.
- Open **Appointments** to compare sample doctors, their qualifications, specializations, experience, fees, working days, and available time examples. Choose **View profile** for the detailed profile.
- Doctor portraits are original local illustrations in `assets/doctors/`; they are not photographs of real practitioners.
- Book by selecting an available date and time, entering patient details, reviewing the appointment, and confirming a simulated payment. The confirmation shows a demo appointment ID, doctor, date/time, fee, and the email address that would receive a notification.
- See **Upcoming**, **Completed**, and **Cancelled** demo appointments below the doctor listings. Pending requests can be cancelled at any time; confirmed visits can be cancelled more than 24 hours ahead. Cancelling immediately releases that sample time slot. Confirmed visits move to Completed after their booked date and time passes.
- The appointment payment and email confirmation are simulated. No card/bank details are requested and no payment, email or clinic contact occurs.
- The prescription control only checks the selected file's type and size. It does not upload or save it.
- Test the order workflow by adding an in-stock item to your cart, opening **Cart → Proceed to checkout**, entering fictional delivery details, optionally attaching a small sample image/PDF, selecting a payment method, then placing the demo order. The order gets a demo ID, invoice, payment record and tracking history.
- Choose COD, UPI, Card, Net Banking or Gateway. Non-COD payments are simulated; no card, UPI PIN or bank details are collected. Orders reduce the browser's sample inventory. The invoice has a print option.
- Open **Operations demo** to review sample orders and advance tracking through Processing, Shipped and Delivered; approve/reject prescription metadata; or update stock and inspect low/out-of-stock counts. This page is publicly accessible and is not an authenticated admin portal.

## Important limitations

This is a frontend-only demonstration. Account information, cart, wishlist, and demo bookings are stored in the browser's local storage. Passwords are hashed in the browser for the prototype, but this is **not secure authentication**. Do not use real passwords, customer details, prescriptions, or other sensitive information here.

There is no backend, real email/SMS verification, secure prescription storage, payment processing, real order placement, or connection to delivery providers or doctors/clinics. Prescription selection only records its filename, type, size and review status in local browser storage; the file contents are never uploaded or made available for admin viewing. Do not select real prescriptions. The operations page has no admin authentication, and browser local storage is not a secure data store. Payment and invoice records are simulated and are not tax invoices or payment receipts. Appointment records, doctor profiles, qualifications, prices, and availability are illustrative sample data. Product information is not medical advice and makes no claim to diagnose, treat, or cure any condition. Consult a qualified healthcare professional for personal advice.
