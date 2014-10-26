package com.awsome.main.actions;

/**
 * Created with IntelliJ IDEA.
 * User: weingaro
 * Date: 10/26/14
 * Time: 5:58 PM
 * To change this template use File | Settings | File Templates.
 */
public class DoNothing2 {
    private String name;

    public String execute() throws Exception {
        return "success";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
