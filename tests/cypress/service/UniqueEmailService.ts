export class UniqueEmailService {
    static generateUniqueEmail(email: string) {
        const [localPart, domain] = email.split('@');
        const uniquePostfix = Date.now();
        return `${localPart}+${uniquePostfix}@${domain}`;
    }
}
