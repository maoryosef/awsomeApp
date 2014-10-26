package com.awsome.main.model;

/**
 * Created with IntelliJ IDEA.
 * User: weingaro
 * Date: 10/26/14
 * Time: 6:01 PM
 * To change this template use File | Settings | File Templates.
 */
public class order {
    private String name;
    private int id;
    private String address;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
