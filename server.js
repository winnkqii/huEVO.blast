// Простейший бэкенд для приёма коллбека оплат от huEVO
export default function handler(req, res) {
    if (req.method === 'POST') {
        const paymentData = req.body;
        
        // Здесь твоя игра может зачислить монетки пользователю в базу данных 
        // или сохранить информацию о транзакции.
        console.log('Получена оплата от huEVO:', paymentData);

        // Отвечаем платформе, что всё прошло успешно
        return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ ok: false, error: 'Method not allowed' });
}