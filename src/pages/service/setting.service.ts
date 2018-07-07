export class SettingService{
    private check: boolean;
    settingToggle(isAlt:boolean)
    {
        this.check=isAlt;
    }
    isAltrSetting()
    {
        return this.check;
    }
}