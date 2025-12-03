
function generateRandomData(base: number, length: number, variance: number) {
    let lastValue = base;
    return Array.from({ length }, () => {
        const change = (Math.random() - 0.5) * 2 * variance;
        lastValue += change;
        return Math.max(0, Math.round(lastValue));
    });
}

export function getPerformanceData() {
    return {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Visualizações',
            data: generateRandomData(15000, 6, 5000),
            borderColor: 'hsl(var(--primary))',
            backgroundColor: 'hsl(var(--primary) / 0.1)',
            tension: 0.3,
            fill: true,
        }, {
            label: 'Contatos',
            data: generateRandomData(150, 6, 50),
            borderColor: 'hsl(var(--accent))',
            backgroundColor: 'hsl(var(--accent) / 0.1)',
            tension: 0.3,
            fill: true,
        }]
    };
}

export function getAudienceData() {
    const data = [
        Math.random() * 40,
        Math.random() * 50,
        Math.random() * 30,
        Math.random() * 20
    ];
    const total = data.reduce((acc, val) => acc + val, 0);
    const percentages = data.map(val => (val / total) * 100);

    return {
        labels: ['18-24', '25-34', '35-44', '45+'],
        datasets: [{
            data: percentages,
            backgroundColor: ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(217.2 32.6% 17.5%)', 'hsl(222 47.4% 11.2%)'],
            borderColor: 'hsl(var(--background))',
            borderWidth: 2,
        }]
    };
}
