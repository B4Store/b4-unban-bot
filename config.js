module.exports = {
    Database: [
        {
            Host: "localhost",
            User_Name: "root",
            Password: "",
            Data_Name: "v5-dev"
        }
    ],
    Commands: [
        {
            First_Command: "unban",
            First_Description: "unban user",
            First_Options: {
                Name: "discord_id",
                Description: "The Discord ID of the user to unban"
            },
            S_Command: "banlist",
            S_Description: "Show a list of banned users"
        }
    ],
    Role_id: "",  // (Role ID) - عشان تقدر تستخدم البوت
    Token: ""  // (Token)
};