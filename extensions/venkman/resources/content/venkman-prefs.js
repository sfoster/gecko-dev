/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/ 
 * 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License. 
 *
 * The Original Code is The JavaScript Debugger
 * 
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation
 * Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation.
 *
 * Alternatively, the contents of this file may be used under the
 * terms of the GNU Public License (the "GPL"), in which case the
 * provisions of the GPL are applicable instead of those above.
 * If you wish to allow use of your version of this file only
 * under the terms of the GPL and not to allow others to use your
 * version of this file under the MPL, indicate your decision by
 * deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL.  If you do not delete
 * the provisions above, a recipient may use your version of this
 * file under either the MPL or the GPL.
 *
 * Contributor(s):
 *  Robert Ginda, <rginda@netscape.com>, original author
 *
 */

console.prefs = new Object();

function initPrefs()
{
    console.prefs = new Object();

    //    console.addPref ("input.commandchar", "/");    
    console.addPref ("sourcetext.tab.string", "    ");
    console.addPref ("input.history.max", 20);
    console.addPref ("input.dtab.time", 500);
    console.addPref ("output.wordbreak.length", 40);

}

console.prefs.save =
function pfs_save ()
{
    throw new BadMojo(ERR_NOT_IMPLEMENTED);
}

console.addPref =
function con_addpref (prefName, defaultValue)
{
    /* XXX convert this to get/set wrappers around mozilla pref api */
    console.prefs[prefName] = defaultValue;
}
