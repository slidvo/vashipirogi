const EMAIL_SENDER = require("./email/email_msg");
const TELEGRAM_SENDER = require("./telegram/tlg_msg");
const PriceList = require('../model/price');
const Cake = require('../model/products');

module.exports = function sendOrderInfo(orderData, orderId) {
    let deliveryCost = 150;
    let pl = new PriceList();
    let cl = new Cake();
    let total = 0;
    let tlg_message = `Заказ № <b>${orderId}</b>\n`;
    let table = `
    <table style="text-align:center;" border=1>
    <caption>Закзаз №${orderId} cписок продуктов:</caption>
    <tr>
        <th>Название</th>
        <th>Вес</th>
        <th>Цена</th>
    </tr>`;

    orderData.order.forEach(function(elt) {
        let item = JSON.parse(elt);
        pl.getPriceByIdAndWeigth(item.id, item.weight, function(item_cost) {
            total += Number(item_cost);

            cl.getCakeNameById(item.id, function(pieName) {
                table += `
                <tr>
                    <td> ${pieName} </td>
                    <td> ${item.weight} </td>
                    <td> ${item_cost} руб. </td>
                </tr>
                `;
                tlg_message += `${pieName}  ${item.weight}кг ${item_cost} руб.\n`;
            });

        });
    });

    if (total < 1000) {
        total += Number(deliveryCost);
        table += `
        <tr>
            <td></td>
            <td>Доставка:</td>
            <td> ${deliveryCost} руб.</td>
        </tr>
        `;
        tlg_message += `Доставка: ${deliveryCost} руб.\n`;
    } else if (total >= 1000) {
        table += `
        <tr>
            <td></td>
            <td>Доставка:</td>
            <td> <b>Бесплатно</b> </td>
        </tr>
        `;

        tlg_message += `Доставка: Бесплатно\n`;
    }

    tlg_message += `<b>Сумма к оплате ${total} руб.</b>\n`;
    table += `
    <tr>
        <td></td>
        <td>Итого:</td>
        <td>${total} руб.</td>
    </tr></table>`;
    let finalMessage = `
    <table style="text-align:center" border="1">
        <caption>
            Контактные данные
        </caption>
        <tr>
            <th>Телефон</th>
            <th>Улица</th>
            <th>Дом</th>
            <th>Подъезд</th>
            <th>Квартира</th>
            <th>Комментарий</th>
        </tr>
        <tr>
            <td> ${orderData.phone} </td>
            <td> ${orderData.street} </td>
            <td> ${orderData.build} </td>
            <td> ${orderData.entrance} </td>
            <td> ${orderData.flat} </td>
            <td> ${orderData.comment} </td>
        </tr>
    </table>
    ${table}`;

    tlg_message += `----------------------------------
Телефон: ${orderData.phone}
Улица: ${orderData.street}
Дом: ${orderData.build}
Квартира: ${orderData.flat}
Подъезд: ${orderData.entrance}
Комментарий: ${orderData.comment}`;
    // tlg_message += `Телефон : ${orderData.phone}\n`;
    // tlg_message += `Улица : ${orderData.street}\n`;
    // tlg_message += `Дом : ${orderData.build}\n`;
    // tlg_message += `Квартира : ${orderData.flat}\n`;
    // tlg_message += `Подъезд : ${orderData.entrance}\n`;
    // tlg_message += `Комментарий : ${orderData.comment}\n`;

    EMAIL_SENDER.sendMessageToEmail(finalMessage, orderId);
    TELEGRAM_SENDER.sendMessageToTelegramChannel(tlg_message);
}